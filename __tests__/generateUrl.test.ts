import generateUrl from "@/lib/generateUrl";
import FilterOption from "@/interfaces/filters/FilterOption";
import { describe, expect, test } from "vitest";

describe("generateUrl", () => {
  const basePath = "/projects";

  test("should return the base path with a question mark if no params are provided", () => {
    const params: FilterOption[] = [];
    expect(generateUrl(params, basePath)).toBe("/projects?");
  });

  test("should generate a URL with a single parameter", () => {
    const params: FilterOption[] = [{ entryName: "skill", slug: "javascript" }];
    expect(generateUrl(params, basePath)).toBe("/projects?skill=javascript");
  });

  test("should generate a URL with multiple parameters", () => {
    const params: FilterOption[] = [
      { entryName: "skill", slug: "javascript" },
      { entryName: "type", slug: "frontend" },
    ];
    const result = generateUrl(params, basePath);
    // The order of params is not guaranteed, so we check for both possibilities
    expect(result).toMatch(
      /^\/projects\?(skill=javascript&type=frontend|type=frontend&skill=javascript)$/
    );
  });

  test("should handle duplicate parameter keys, keeping the last one", () => {
    const params: FilterOption[] = [
      { entryName: "skill", slug: "javascript" },
      { entryName: "skill", slug: "typescript" },
    ];
    expect(generateUrl(params, basePath)).toBe("/projects?skill=typescript");
  });

  test("should encode special characters in parameter values", () => {
    const params: FilterOption[] = [
      { entryName: "skill", slug: "c++" },
      { entryName: "name", slug: "a test project" },
    ];
    const result = generateUrl(params, basePath);
    expect(result).toMatch(
      /^\/projects\?(skill=c%2B%2B&name=a%20test%20project|name=a%20test%20project&skill=c%2B%2B)$/
    );
  });

  test("should handle empty slug values", () => {
    const params: FilterOption[] = [{ entryName: "skill", slug: "" }];
    expect(generateUrl(params, basePath)).toBe("/projects?skill=");
  });

  test("should trim whitespace from slug values", () => {
    const params: FilterOption[] = [{ entryName: "skill", slug: "  react  " }];
    expect(generateUrl(params, basePath)).toBe("/projects?skill=react");
  });

  test("should handle a mix of different cases", () => {
    const params: FilterOption[] = [
      { entryName: "skill", slug: "javascript" },
      { entryName: "skill", slug: "typescript" },
      { entryName: "type", slug: "  frontend  " },
      { entryName: "name", slug: "special project!" },
    ];
    const result = generateUrl(params, basePath);
    const expectedParams = new URLSearchParams({
      skill: "typescript",
      type: "frontend",
      name: "special project!",
    }).toString();
    const [base, queryString] = result.split("?");
    expect(base).toBe(basePath);
    const receivedParams = new URLSearchParams(queryString);
    const expectedParamsObj = Object.fromEntries(
      new URLSearchParams(expectedParams)
    );
    const receivedParamsObj = Object.fromEntries(receivedParams);
    expect(receivedParamsObj).toEqual(expectedParamsObj);
  });
});
