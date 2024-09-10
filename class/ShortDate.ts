/**
 * Represents a short date with year and month.
 */
class ShortDate {
  year: number;
  month: number;

  /**
   * Array of month names.
   * Used to convert month number to name.
   */
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
   * Creates a ShortDate instance.
   * @param year - The year.
   * @param month - The month (1-12).
   * @throws Will throw an error if the month is not between 1 and 12.
   */
  constructor(year: number, month: number) {
    if (month < 1 || month > 12) {
      throw new Error("Month must be between 1 and 12.");
    }

    this.year = year;
    this.month = month;
  }

  /**
   * Gets the name of the month.
   * @returns The full name of the month.
   */
  private getMonthName(): string {
    return ShortDate.monthNames[this.month - 1];
  }

  /**
   * Calculates the difference between this date and another ShortDate.
   * @param other - Another ShortDate instance.
   * @returns The difference in years, including fractions for months.
   */
  difference(other: ShortDate): number {
    const yearDiff: number = this.year - other.year;
    const monthDiff: number = (this.month - other.month) / 12;
    return yearDiff + monthDiff;
  }

  /**
   * Returns the date as a string in "Month Year" format.
   * @returns The formatted date.
   */
  toString(): string {
    return `${this.getMonthName()} ${this.year}`;
  }

  /**
   * Converts the date to a string for JSON serialization.
   * @returns The formatted date string.
   */
  toJSON(): string {
    return this.toString();
  }

  /**
   * Static method to subtract two ShortDate instances.
   * @param date1 - The first ShortDate.
   * @param date2 - The second ShortDate.
   * @returns The difference in years, including fractions for months.
   */
  static subtract(date1: ShortDate, date2: ShortDate): number {
    return date1.difference(date2);
  }

  /**
   * Formats the experience time between this date and another ShortDate.
   * @param other - Another ShortDate instance.
   * @returns The formatted experience time.
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
