import { describe, expect, it } from "vitest";
import { cn } from "@/lib/utils";

describe("cn utility", () => {
  it("should return an empty string when called with no arguments", () => {
    expect(cn()).toBe("");
  });

  it("should handle a single class string", () => {
    expect(cn("bg-red-500")).toBe("bg-red-500");
  });

  it("should concatenate multiple class strings with spaces", () => {
    expect(cn("px-4", "py-2", "text-center")).toBe("px-4 py-2 text-center");
  });

  it("should ignore falsy values like null, undefined, false, and empty strings", () => {
    expect(cn("btn", null, undefined, false, "", "btn-primary")).toBe(
      "btn btn-primary",
    );
  });

  it("should handle conditional class objects", () => {
    expect(
      cn("base-class", {
        "is-active": true,
        "is-disabled": false,
        "is-hidden": true,
      }),
    ).toBe("base-class is-active is-hidden");
  });

  it("should handle nested arrays of class names", () => {
    expect(cn(["btn", ["btn-lg", ["text-white", false]]])).toBe(
      "btn btn-lg text-white",
    );
  });

  it("should resolve Tailwind CSS conflicts by keeping the last conflicting class", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
    expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500");
    expect(cn("text-sm", "text-lg")).toBe("text-lg");
    expect(cn("p-4", "px-2")).toBe("p-4 px-2");
  });

  it("should handle complex combinations of objects, arrays, and conflict resolution", () => {
    const isActive = true;
    const isError = false;

    const result = cn(
      "text-base font-normal",
      [
        "bg-white",
        {
          "font-bold": isActive,
          "text-red-500": isError,
          "text-black": !isError,
        },
      ],
      "bg-black", // Overrides bg-white
    );

    expect(result).toBe("text-base font-bold text-black bg-black");
  });
});
