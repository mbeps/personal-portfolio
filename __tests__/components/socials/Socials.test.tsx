import { renderToStaticMarkup } from "react-dom/server";
import { FaGithub } from "react-icons/fa";
import { describe, expect, test } from "vitest";
import SocialIcon from "@/components/socials/SocialIcon";
import Socials from "@/components/socials/Socials";
import socialLinks from "@/constants/socials";

describe("Socials Component Suite", () => {
  describe("SocialIcon", () => {
    test("renders external link with target blank, tooltip trigger and icon", () => {
      const html = renderToStaticMarkup(
        <SocialIcon
          name="GitHub"
          link="https://github.com/mbeps"
          IconComponent={FaGithub}
        />,
      );

      expect(html).toContain('href="https://github.com/mbeps"');
      expect(html).toContain('target="_blank"');
      expect(html).toContain("<svg");
    });

    test("applies custom iconSize if provided", () => {
      const html = renderToStaticMarkup(
        <SocialIcon
          name="GitHub"
          link="https://github.com/mbeps"
          IconComponent={FaGithub}
          iconSize={45}
        />,
      );

      expect(html).toContain('height="45"');
      expect(html).toContain('width="45"');
    });

    test("defaults iconSize to 30 when not specified", () => {
      const html = renderToStaticMarkup(
        <SocialIcon
          name="GitHub"
          link="https://github.com/mbeps"
          IconComponent={FaGithub}
        />,
      );

      expect(html).toContain('height="30"');
      expect(html).toContain('width="30"');
    });
  });

  describe("Socials", () => {
    test("renders all configured social links from constants", () => {
      const html = renderToStaticMarkup(<Socials />);

      for (const social of socialLinks) {
        expect(html).toContain(`href="${social.link}"`);
      }
    });

    test("applies custom className through twMerge", () => {
      const html = renderToStaticMarkup(
        <Socials className="custom-socials-class space-x-10" />,
      );

      expect(html).toContain("custom-socials-class");
      expect(html).toContain("space-x-10");
    });

    test("passes custom iconSize down to all SocialIcon children", () => {
      const html = renderToStaticMarkup(<Socials iconSize={50} />);

      expect(html).toContain('height="50"');
      expect(html).toContain('width="50"');
    });
  });
});
