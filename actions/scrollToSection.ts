/**
 * Allows the user to scroll to a specific section of the page.
 *
 * @param sectionName (string): the name of the section to scroll to
 */
const scrollToSection = (sectionName: string) => {
  const element = document.getElementById(sectionName as string);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
};

export default scrollToSection;
