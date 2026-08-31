import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, test } from "vitest";
import Footer from "@/components/footer/Footer";
import developerName from "@/constants/developerName";
import socialLinks from "@/constants/socials";

describe("Footer Component Suite", () => {
  test("renders footer element with copyright and developer name", () => {
    const currentYear = new Date().getFullYear();
    const html = renderToStaticMarkup(<Footer />);

    expect(html).toContain("<footer");
    expect(html).toContain(`© 2023-${currentYear} ${developerName}`);
    expect(html).toContain(
      'href="https://github.com/mbeps/personal-portfolio"',
    );
  });

  test("renders social links inside the footer", () => {
    const html = renderToStaticMarkup(<Footer />);

    for (const social of socialLinks) {
      expect(html).toContain(`href="${social.link}"`);
    }
  });

  test("renders container with correct max width and dark mode styling classes", () => {
    const html = renderToStaticMarkup(<Footer />);

    expect(html).toContain("max-w-[2560px]");
    expect(html).toContain("border-neutral-200");
    expect(html).toContain("dark:border-neutral-700");
    expect(html).toContain("dark:bg-black");
  });
});
