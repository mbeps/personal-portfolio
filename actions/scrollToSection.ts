/**
 * Allows the user to scroll to a specific section of the page.
 *
 * @param sectionName (string): the name of the section to scroll to
 */
export default function scrollToSection(sectionName: string) {
  const element: HTMLElement | null = document.getElementById(
    sectionName as string
  );
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
}
