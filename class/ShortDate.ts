/**
 * Represents a date with only a year and a month.
 * This class is useful for timelines where the specific day is not important.
 * It provides methods for formatting and calculating durations.
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
   * Creates an instance of a ShortDate.
   * @param year The full year.
   * @param month The month, from 1 (January) to 12 (December).
   */
  constructor(year: number, month: number) {
    if (month < 1 || month > 12) {
      throw new Error("Month must be between 1 and 12.");
    }

    this.year = year;
    this.month = month;
  }

  /**
   * Retrieves the full name of the month.
   * @returns The month's name (e.g., "January").
   */
  private getMonthName(): string {
    return ShortDate.monthNames[this.month - 1];
  }

  /**
   * Calculates the difference in years between this date and another.
   * The result is a float, where the decimal part represents months.
   * @param other The date to compare against.
   * @returns The difference in years.
   */
  difference(other: ShortDate): number {
    const yearDiff: number = this.year - other.year;
    const monthDiff: number = (this.month - other.month) / 12;
    return yearDiff + monthDiff;
  }

  /**
   * Formats the date as a "Month Year" string.
   * @returns The formatted date string (e.g., "June 2023").
   */
  toString(): string {
    return `${this.getMonthName()} ${this.year}`;
  }

  /**
   * Converts the date to its string representation for JSON serialization.
   * This ensures `JSON.stringify()` uses the desired format.
   * @returns The formatted date string.
   */
  toJSON(): string {
    return this.toString();
  }

  /**
   * Calculates the difference in years between two ShortDate instances.
   * @param date1 The later date.
   * @param date2 The earlier date.
   * @returns The difference in years.
   */
  static subtract(date1: ShortDate, date2: ShortDate): number {
    return date1.difference(date2);
  }

  /**
   * Formats the duration between two dates into a human-readable string.
   * For example, "2 years and 3 months" or "6 months".
   * @param other The other date to calculate the duration from.
   * @returns A formatted string representing the time duration.
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
