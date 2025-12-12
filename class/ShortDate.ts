/**
 * Lightweight date helper built around year and month to keep timelines and experience math consistent across roles, courses, and certificates.
 * Used wherever the site needs readable durations without day-level precision, matching how dates are stored in the static databases.
 */
class ShortDate {
  year: number;
  month: number;

  private static monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  /**
   * Creates an instance for a given year and month, mirroring how roles and education entries are encoded in the data maps.
   * @param year Full calendar year.
   * @param month Month index starting at 1, aligned with how public asset folders are named for dated content.
   */
  constructor(year: number, month: number) {
    if (month < 1 || month > 12) {
      throw new Error("Month must be between 1 and 12.");
    }

    this.year = year;
    this.month = month;
  }

  /**
   * Retrieves the full name of the month so timelines render human friendly labels alongside thumbnails pulled from public routes.
   * @returns Month label such as "January".
   */
  private getMonthName(): string {
    return ShortDate.monthNames[this.month - 1];
  }

  /**
   * Calculates the difference in years between this date and another, returning fractional years so experience badges can show partial durations.
   * @param other Date to compare against.
   * @returns Positive or negative year span including month precision.
   */
  difference(other: ShortDate): number {
    const yearDiff: number = this.year - other.year;
    const monthDiff: number = (this.month - other.month) / 12;
    return yearDiff + monthDiff;
  }

  /**
   * Formats the date as a "Month Year" string so it can be dropped straight into cards without extra formatting logic.
   * @returns Display string such as "June 2023".
   */
  toString(): string {
    return `${this.getMonthName()} ${this.year}`;
  }

  /**
   * Converts the date to its string representation for JSON serialization, keeping exported datasets aligned with the readable format shown on the site.
   * @returns Month-year label used throughout the UI.
   */
  toJSON(): string {
    return this.toString();
  }

  /**
   * Calculates the difference in years between two ShortDate instances, mirroring the logic used by roles when computing `timeInRole`.
   * @param date1 Later date.
   * @param date2 Earlier date.
   * @returns Year span expressed as a decimal.
   */
  static subtract(date1: ShortDate, date2: ShortDate): number {
    return date1.difference(date2);
  }

  /**
   * Formats the duration between two dates into a human-readable string so cards and tables can show how long an experience lasted.
   * @param other Date to calculate the duration from.
   * @returns Phrase such as "2 years and 3 months" or "6 months".
   */
  formatExperienceTime(other: ShortDate): string {
    const experienceTime: number = this.difference(other);

    if (experienceTime < 1) {
      const months: number = Math.round(experienceTime * 12);
      return `${months} ${months === 1 ? "month" : "months"}`;
    } else {
      const years: number = Math.floor(experienceTime);
      const months: number = Math.round((experienceTime - years) * 12);
      const yearString = `${years} ${years === 1 ? "year" : "years"}`;
      const monthString: string =
        months > 0 ? ` and ${months} ${months === 1 ? "month" : "months"}` : "";
      return yearString + monthString;
    }
  }
}

export default ShortDate;
