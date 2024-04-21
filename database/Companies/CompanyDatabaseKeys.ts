/**
 * This enum is used to represent the keys of the companies in the database.
 * This enum is used to avoid hardcoding the keys in the code, getting autocompletion support and avoiding typos.
 * The strings correspond to location of the markdown files in the blog folder at `public/companies/`.
 * Whenever a new company is added to the database, a new key should be added to this enum.
 *
 * @see {@link companyMap} at `database/companies.ts`
 */
enum CompanyDatabaseKeys {
  Commerzbank = "commerzbank",
  GoogleRHULDevelopersClub = "google-x-rhul-developers-club",
  AJTuitionCentre = "aj-tuition-centre",
  Madhus = "madhus",
  LondonStanstedAirport = "london-stansted-airport",
  GnomeFoundation = "gnome-foundation",
  WGraduates = "w-graduates",
}

export default CompanyDatabaseKeys;
