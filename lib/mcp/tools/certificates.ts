import type { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import type CertificateDatabaseKeys from "@/database/certificates/certificate-database-keys";
import certificateDatabaseMap, {
  certificateDatabaseKeys,
} from "@/database/certificates/certificate-database-map";
import type CertificateInterface from "@/database/certificates/certificate-interface";
import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import CertificateCategoriesEnum from "@/enums/certificate/certificate-categories-enum";
import CertificateIssuersEnum from "@/enums/certificate/certificate-issuers-enum";
import filterCertificatesByIssuer from "@/lib/material/filter/filter-certificates-by-issuer";
import filterMaterialByArchivedStatus from "@/lib/material/filter/filter-material-by-archived-status";
import filterMaterialByCategory from "@/lib/material/filter/filter-material-by-category";
import filterMaterialBySkill from "@/lib/material/filter/filter-material-by-skill";
import { formatToolResponse } from "@/lib/mcp/helpers";
import searchDatabase from "@/lib/search/search-database";

/**
 * Registers `list_certificates` and `get_certificate` tools onto the MCP server.
 *
 * @param server MCP server instance.
 */
export function registerCertificatesTools(server: McpServer): void {
  server.registerTool(
    "list_certificates",
    {
      title: "List Certificates & Licenses",
      description:
        "List and filter certifications and online courses by issuer, category, skill, archived status, or search query.",
      inputSchema: z.object({
        issuer: z.nativeEnum(CertificateIssuersEnum).optional(),
        category: z.nativeEnum(CertificateCategoriesEnum).optional(),
        skill: z.string().optional(),
        archived: z.boolean().optional().default(false),
        search: z.string().optional(),
        limit: z.number().int().positive().optional(),
      }),
    },
    async ({ issuer, category, skill, archived, search, limit }) => {
      let keys: string[] = [...certificateDatabaseKeys];

      // Filter archived
      keys = filterMaterialByArchivedStatus<CertificateInterface>(
        archived,
        keys,
        certificateDatabaseMap,
      );

      // Filter by issuer
      if (issuer) {
        keys = filterCertificatesByIssuer(issuer, keys, certificateDatabaseMap);
      }

      // Filter by category
      if (category) {
        keys = filterMaterialByCategory<CertificateInterface>(
          category,
          keys,
          certificateDatabaseMap,
        );
      }

      // Filter by skill
      if (skill) {
        keys = filterMaterialBySkill<CertificateInterface>(
          skill as SkillDatabaseKeys,
          keys,
          certificateDatabaseMap,
        );
      }

      // Search query
      if (search && search.trim() !== "") {
        const matched = searchDatabase(
          certificateDatabaseMap,
          search,
          ["name", "category", "issuer", "skills"],
          { skills: (item) => item.skills.map((s) => s.toString()) },
        );
        const set = new Set(matched);
        keys = keys.filter((k) => set.has(k));
      }

      if (limit && limit > 0) {
        keys = keys.slice(0, limit);
      }

      const certificates = keys.map((key) => {
        const cert = certificateDatabaseMap[key as CertificateDatabaseKeys];
        return {
          key,
          name: cert.name,
          issuer: cert.issuer,
          category: cert.category,
          certificateURL: cert.certificateURL,
          skills: cert.skills,
          archived: Boolean(cert.archived),
        };
      });

      return formatToolResponse({
        total: certificates.length,
        certificates,
      });
    },
  );

  server.registerTool(
    "get_certificate",
    {
      title: "Get Certificate Details",
      description: "Retrieve details for a specific certificate by key.",
      inputSchema: z.object({
        certificateKey: z
          .string()
          .describe("Unique identifier key for the certificate"),
      }),
    },
    async ({ certificateKey }) => {
      const cert =
        certificateDatabaseMap[certificateKey as CertificateDatabaseKeys];
      if (!cert) {
        return formatToolResponse(
          { error: `Certificate '${certificateKey}' not found.` },
          true,
        );
      }

      return formatToolResponse({
        key: certificateKey,
        name: cert.name,
        issuer: cert.issuer,
        category: cert.category,
        certificateURL: cert.certificateURL,
        skills: cert.skills,
        archived: Boolean(cert.archived),
      });
    },
  );
}
