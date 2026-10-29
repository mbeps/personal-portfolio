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
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm-5.2 7h10.4c.44 0 .8.36.8.8v.26l-6 3.6-6-3.6V8.8c0-.44.36-.8.8-.8zm-.8 2.6v4.6c0 .44.36.8.8.8h10.4c.44 0 .8-.36.8-.8v-4.6l-5.59 3.35a.8.8 0 0 1-.82 0L6 10.6z"
    />
  </svg>
);

export default MailIcon;
