/**
 * Represents the standard tool execution result compliant with the Model Context Protocol.
 */
export interface McpToolResponse {
  [key: string]: unknown;
  content: Array<{
    type: "text";
    text: string;
  }>;
  isError?: boolean;
}

/**
 * Formats data into a standard MCP tool text content response.
 *
 * @param data Data to return (object, array, or string).
 * @param isError Optional flag indicating whether the tool execution resulted in an error.
 * @returns Formatted MCP tool response object.
 */
export function formatToolResponse(
  data: unknown,
  isError = false,
): McpToolResponse {
  const text = typeof data === "string" ? data : JSON.stringify(data, null, 2);

  return {
    content: [{ type: "text", text }],
    ...(isError ? { isError: true } : {}),
  };
}
