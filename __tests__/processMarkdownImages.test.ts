import processMarkdownImages from "@/lib/actions/processMarkdownImages";
import { describe, expect, it } from "vitest";

describe("processMarkdownImages", () => {
  it("should replace single {BASE} placeholder with base path", () => {
    const content = "![Image]({BASE}/image.png)";
    const basePath = "/blogs/my-blog/img";
    const result = processMarkdownImages(content, basePath);
    expect(result).toBe("![Image](/blogs/my-blog/img/image.png)");
  });

  it("should replace multiple {BASE} placeholders with base path", () => {
    const content = "![Image1]({BASE}/img1.png)\n![Image2]({BASE}/img2.png)";
    const basePath = "/projects/my-project";
    const result = processMarkdownImages(content, basePath);
    expect(result).toBe(
      "![Image1](/projects/my-project/img1.png)\n![Image2](/projects/my-project/img2.png)"
    );
  });

  it("should handle content with no {BASE} placeholders", () => {
    const content = "![Image](/static/image.png)";
    const basePath = "/blogs/my-blog/img";
    const result = processMarkdownImages(content, basePath);
    expect(result).toBe("![Image](/static/image.png)");
  });

  it("should handle empty content", () => {
    const content = "";
    const basePath = "/blogs/my-blog/img";
    const result = processMarkdownImages(content, basePath);
    expect(result).toBe("");
  });

  it("should handle {BASE} in different contexts", () => {
    const content = "Text {BASE}/file.pdf and ![alt]({BASE}/image.jpg)";
    const basePath = "/resources";
    const result = processMarkdownImages(content, basePath);
    expect(result).toBe(
      "Text /resources/file.pdf and ![alt](/resources/image.jpg)"
    );
  });
});
