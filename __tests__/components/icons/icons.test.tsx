import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, test } from "vitest";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import MailIcon from "@/components/icons/mail-icon";

describe("Custom Icons Suite", () => {
  describe("LinkedInIcon", () => {
    test("renders svg with default dimensions (1em) and fill currentColor", () => {
      const html = renderToStaticMarkup(<LinkedInIcon />);

      expect(html).toContain("<svg");
      expect(html).toContain('viewBox="0 0 24 24"');
      expect(html).toContain('width="1em"');
      expect(html).toContain('height="1em"');
      expect(html).toContain('fill="currentColor"');
      expect(html).toContain('fill-rule="evenodd"');
    });

    test("applies custom size to width and height", () => {
      const html = renderToStaticMarkup(<LinkedInIcon size={40} />);

      expect(html).toContain('width="40"');
      expect(html).toContain('height="40"');
    });

    test("passes className, title, and other props", () => {
      const html = renderToStaticMarkup(
        <LinkedInIcon
          className="custom-linkedin-class"
          title="LinkedIn Profile"
          aria-label="LinkedIn"
        />,
      );

      expect(html).toContain("custom-linkedin-class");
      expect(html).toContain("<title>LinkedIn Profile</title>");
      expect(html).toContain('aria-label="LinkedIn"');
    });

    test("applies custom color and style", () => {
      const html = renderToStaticMarkup(
        <LinkedInIcon color="#0077b5" style={{ opacity: 0.8 }} />,
      );

      expect(html).toContain("color:#0077b5");
      expect(html).toContain("opacity:0.8");
    });
  });

  describe("MailIcon", () => {
    test("renders svg with default dimensions (1em) and fill currentColor", () => {
      const html = renderToStaticMarkup(<MailIcon />);

      expect(html).toContain("<svg");
      expect(html).toContain('viewBox="0 0 24 24"');
      expect(html).toContain('width="1em"');
      expect(html).toContain('height="1em"');
      expect(html).toContain('fill="currentColor"');
      expect(html).toContain('fill-rule="evenodd"');
    });

    test("applies custom size to width and height", () => {
      const html = renderToStaticMarkup(<MailIcon size={36} />);

      expect(html).toContain('width="36"');
      expect(html).toContain('height="36"');
    });

    test("passes className, title, and other props", () => {
      const html = renderToStaticMarkup(
        <MailIcon
          className="custom-mail-class"
          title="Send Email"
          aria-label="Email"
        />,
      );

      expect(html).toContain("custom-mail-class");
      expect(html).toContain("<title>Send Email</title>");
      expect(html).toContain('aria-label="Email"');
    });

    test("applies custom color and style", () => {
      const html = renderToStaticMarkup(
        <MailIcon color="#ea4335" style={{ opacity: 0.9 }} />,
      );

      expect(html).toContain("color:#ea4335");
      expect(html).toContain("opacity:0.9");
    });
  });
});
