/// <reference types="vitest/globals" />
import ShortDate from "@/class/ShortDate";
import { describe, expect, test } from "vitest";

describe("ShortDate", () => {
  test("validates month bounds", () => {
    expect(() => new ShortDate(2024, 0)).toThrow(
      "Month must be between 1 and 12."
    );
    expect(() => new ShortDate(2024, 13)).toThrow(
      "Month must be between 1 and 12."
    );
  });

  test("formats month names and serializes to JSON", () => {
    const date = new ShortDate(2023, 12);

    expect(date.toString()).toBe("December 2023");
    expect(JSON.stringify(date)).toBe('"December 2023"');
  });

  test("calculates differences between dates", () => {
    const laterDate = new ShortDate(2022, 1);
    const earlierDate = new ShortDate(2020, 7);

    expect(laterDate.difference(earlierDate)).toBeCloseTo(1.5);
    expect(ShortDate.subtract(laterDate, earlierDate)).toBeCloseTo(1.5);
  });

  test("formats experiences shorter than a year", () => {
    const startDate = new ShortDate(2024, 1);

    const oneMonthLater = new ShortDate(2024, 2);
    const halfYearLater = new ShortDate(2024, 7);

    expect(oneMonthLater.formatExperienceTime(startDate)).toBe("1 month");
    expect(halfYearLater.formatExperienceTime(startDate)).toBe("6 months");
  });

  test("formats multi-year experiences with month details", () => {
    const roleStart = new ShortDate(2021, 1);

    const oneYearOneMonthLater = new ShortDate(2022, 2);
    const oneYearThreeMonthsLater = new ShortDate(2022, 4);

    expect(oneYearOneMonthLater.formatExperienceTime(roleStart)).toBe(
      "1 year and 1 month"
    );
    expect(oneYearThreeMonthsLater.formatExperienceTime(roleStart)).toBe(
      "1 year and 3 months"
    );
  });

  test("formats experiences that span whole years without leftover months", () => {
    const startDate = new ShortDate(2020, 4);
    const endDate = new ShortDate(2023, 4);

    expect(endDate.formatExperienceTime(startDate)).toBe("3 years");
  });
});
