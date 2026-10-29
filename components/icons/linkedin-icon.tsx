import type { IconType } from "react-icons";

/**
 * Custom rounded LinkedIn icon matching the circular silhouette style of the GitHub icon.
 * Uses `fill="currentColor"` and `fillRule="evenodd"` so it adapts seamlessly to both light and dark themes.
 *
 * @param props SVG attributes including `size`, `className`, `style`, and `color`.
 * @returns SVG element representing the rounded LinkedIn icon.
 */
const LinkedInIcon: IconType = ({
  size = "1em",
  className,
  title,
  style,
  color,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    style={{ color, ...style }}
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      fillRule="evenodd"
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM8.25 6.9a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6zM7.125 10.25h2.25v6.5h-2.25v-6.5zm3.75 0h2.15v.92h.03c.3-.57 1.03-1.17 2.12-1.17 2.27 0 2.69 1.49 2.69 3.43v3.32h-2.25v-2.94c0-.7-.01-1.6-1-1.6-1 0-1.15.78-1.15 1.55v2.99h-2.25v-6.5z"
    />
  </svg>
);

export default LinkedInIcon;
