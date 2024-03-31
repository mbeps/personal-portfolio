/**
 * This enum represents the issuers of the certificates that a user can have.
 * This enum is used to avoid hardcoding the issuers in the code, getting autocompletion support and avoiding typos.
 */
enum CertificateIssuersEnum {
  Coursera = "Coursera",
  Udemy = "Udemy",
  LinkedIn = "LinkedIn",
  NASBA = "NASBA",
  PMI = "PMI",
  GitHub = "GitHub",
  RoyalHollowayUniversity = "Royal Holloway University",
  SymphonySolutions = "Symphony Solutions",
  Amigoscode = "Amigoscode",
}

export default CertificateIssuersEnum;
