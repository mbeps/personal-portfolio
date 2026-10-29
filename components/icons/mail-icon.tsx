import type { IconType } from "react-icons";

/**
 * Custom rounded Email/Mail icon matching the circular silhouette style of the GitHub icon.
 * Uses `fill="currentColor"` and `fillRule="evenodd"` so it adapts seamlessly to both light and dark themes.
 *
 * @param props SVG attributes including `size`, `className`, `style`, and `color`.
 * @returns SVG element representing the rounded Email/Mail icon.
 */
const MailIcon: IconType = ({
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
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM5.2 6.5h13.6c.66 0 1.2.54 1.2 1.2v.4L12 13.1 4 8.1v-.4c0-.66.54-1.2 1.2-1.2zM4 9.9v6.4c0 .66.54 1.2 1.2 1.2h13.6c.66 0 1.2-.54 1.2-1.2V9.9l-7.47 4.67a1 1 0 0 1-1.06 0L4 9.9z"
    />
  </svg>
);

export default MailIcon;
