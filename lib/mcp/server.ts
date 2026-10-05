import { createMcpHandler } from "mcp-handler";
import { getSiteUrl } from "@/config/env";
import { registerAllTools } from "@/lib/mcp/register-tools";

const siteUrl = getSiteUrl();

/**
 * Base64-encoded SVG data URI of public/favicon.svg.
 * Embeds self-contained vector icon so MCP clients can render branding offline and without network fetch.
 */
export const MCP_FAVICON_DATA_URI =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDwhLS0gVmVydGljYWwgZ3JhZGllbnQgZnJvbSBSZWQgYXQgdG9wIHRvIFllbGxvd2lzaC1PcmFuZ2UgYXQgYm90dG9tIC0tPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJyZWRUb09yYW5nZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRkYwMDAwIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGRkI4MDAiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgoKICAgIDwhLS0gQ2lyY3VsYXIgY2xpcCBtYXNrIC0tPgogICAgPGNsaXBQYXRoIGlkPSJjaXJjbGVDbGlwIj4KICAgICAgPGNpcmNsZSBjeD0iMjAwIiBjeT0iMjAwIiByPSIxODAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBMZXR0ZXIgTSBjbGlwcGVkIGJ5IHRoZSBjaXJjdWxhciBib3VuZGFyeSAtLT4KICA8ZyBjbGlwLXBhdGg9InVybCgjY2lyY2xlQ2xpcCkiPgogICAgPHBhdGggCiAgICAgIGQ9Ik0gMjAsMjAgTCAxMDUsMjAgTCAyMDAsMTc1IEwgMjk1LDIwIEwgMzgwLDIwIEwgMzgwLDM4MCBMIDMwMCwzODAgTCAzMDAsMTY1IEwgMjAwLDMxMCBMIDEwMCwxNjUgTCAxMDAsMzgwIEwgMjAsMzgwIFoiIAogICAgICBmaWxsPSJ1cmwoI3JlZFRvT3JhbmdlKSIgCiAgICAvPgogIDwvZz4KPC9zdmc+Cgo=";

/**
 * Shared MCP handler adapter configured with all portfolio tools and metadata.
 * Serves both 2026-07-28 stateless MCP protocol and legacy Streamable HTTP transports.
 */
export const mcpHandler = createMcpHandler(
  (server) => {
    registerAllTools(server);
  },
  {
    serverInfo: {
      name: "personal-portfolio-mcp",
      title: "Maruf Personal Portfolio",
      version: "1.0.0",
      description:
        "Interactive portfolio MCP server providing access to projects, skills, experience, education, certificates, and blogs.",
      websiteUrl: siteUrl,
      icons: [
        {
          src: `${siteUrl}/favicon.svg`,
          mimeType: "image/svg+xml",
          sizes: ["any"],
        },
        {
          src: `${siteUrl}/icon.png`,
          mimeType: "image/png",
          sizes: ["192x192"],
        },
        {
          src: MCP_FAVICON_DATA_URI,
          mimeType: "image/svg+xml",
          sizes: ["any"],
        },
      ],
    } as unknown as { name: string; version: string },
  },
);

export default mcpHandler;
