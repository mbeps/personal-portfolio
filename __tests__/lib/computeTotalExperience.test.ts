import { describe, expect, it } from "vitest";
import ShortDate from "@/class/short-date";
import computeTotalExperience from "@/lib/compute-total-experience";

describe("computeTotalExperience", () => {
  it("should return 0 when the jobs list is empty", () => {
    const result = computeTotalExperience([]);
    expect(result).toBe(0);
  });

  it("should compute experience correctly for a single job spanning full years", () => {
    const jobs = [
      {
        startDate: new ShortDate(2020, 1),
        endDate: new ShortDate(2023, 1),
      },
    ];
    const result = computeTotalExperience(jobs);
    expect(result).toBe(3);
  });

  it("should compute experience correctly for a single job with fractional months", () => {
    const jobs = [
      {
        startDate: new ShortDate(2022, 1),
        endDate: new ShortDate(2022, 7), // 6 months = 0.5 years
      },
    ];
    const result = computeTotalExperience(jobs);
    expect(result).toBeCloseTo(0.5);
  });

  it("should return 0 for a job where start date equals end date", () => {
    const jobs = [
      {
        startDate: new ShortDate(2021, 5),
        endDate: new ShortDate(2021, 5),
      },
    ];
    const result = computeTotalExperience(jobs);
    expect(result).toBe(0);
  });

  it("should sum experience across multiple jobs correctly", () => {
    const jobs = [
      {
        startDate: new ShortDate(2018, 1),
        endDate: new ShortDate(2019, 1), // 1.0 year
      },
      {
        startDate: new ShortDate(2019, 6),
        endDate: new ShortDate(2021, 6), // 2.0 years
      },
      {
        startDate: new ShortDate(2022, 1),
        endDate: new ShortDate(2022, 7), // 0.5 years
      },
    ];
    const result = computeTotalExperience(jobs);
    expect(result).toBeCloseTo(3.5);
  });

  it("should handle overlapping jobs by linearly summing individual durations", () => {
    const jobs = [
      {
        startDate: new ShortDate(2020, 1),
        endDate: new ShortDate(2021, 1), // 1.0 year
      },
      {
        startDate: new ShortDate(2020, 6),
        endDate: new ShortDate(2021, 6), // 1.0 year
      },
    ];
    const result = computeTotalExperience(jobs);
    expect(result).toBe(2);
  });

  it("should correctly handle single month durations", () => {
    const jobs = [
      {
        startDate: new ShortDate(2023, 1),
        endDate: new ShortDate(2023, 2), // 1/12 years
      },
    ];
    const result = computeTotalExperience(jobs);
    expect(result).toBeCloseTo(1 / 12);
  });
});
