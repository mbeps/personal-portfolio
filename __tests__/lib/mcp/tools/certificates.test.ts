import { McpServer } from "@modelcontextprotocol/server";
import { describe, expect, it } from "vitest";
import CertificateIssuersEnum from "@/enums/certificate/certificate-issuers-enum";
import { registerCertificatesTools } from "@/lib/mcp/tools/certificates";

describe("MCP Tools: Certificates", () => {
  const server = new McpServer({ name: "test-server", version: "1.0.0" });
  registerCertificatesTools(server);
  const tools = (
    server as unknown as {
      _registeredTools: Record<
        string,
        {
          handler: (
            args: unknown,
          ) => Promise<{ content: Array<{ text: string }>; isError?: boolean }>;
        }
      >;
    }
  )._registeredTools;

  it("list_certificates returns certificates and filters by issuer", async () => {
    const response = await tools.list_certificates.handler({
      issuer: CertificateIssuersEnum.Udemy,
      archived: false,
    });
    const data = JSON.parse(response.content[0].text);
    expect(data.total).toBeGreaterThan(0);
    for (const cert of data.certificates) {
      expect(cert.issuer).toBe(CertificateIssuersEnum.Udemy);
    }
  });

  it("get_certificate returns certificate details for valid key", async () => {
    const listResponse = await tools.list_certificates.handler({ limit: 1 });
    const listData = JSON.parse(listResponse.content[0].text);
    const sampleKey = listData.certificates[0].key;

    const response = await tools.get_certificate.handler({
      certificateKey: sampleKey,
    });
    const data = JSON.parse(response.content[0].text);
    expect(data.key).toBe(sampleKey);
    expect(data.certificateURL).toBeDefined();
  });
});
