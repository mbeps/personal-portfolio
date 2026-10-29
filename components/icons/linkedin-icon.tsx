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
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM7.15 4.8a1.95 1.95 0 1 1 0 3.9 1.95 1.95 0 0 1 0-3.9zM5.5 9.8h3.3v8.2H5.5V9.8zm5.2 0h3.15v1.15h.05c.44-.83 1.51-1.4 2.85-1.4 3.05 0 3.65 1.85 3.65 4.35V18h-3.3v-3.65c0-.9-.02-2.05-1.35-2.05-1.35 0-1.55 1.02-1.55 2v3.7H10.7V9.8z"
    />
  </svg>
);

export default LinkedInIcon;
