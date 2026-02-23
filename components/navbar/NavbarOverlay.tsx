import { useMediaQuery } from "@/hooks/useMediaQuery";
import NavigationItemInterface from "@/interfaces/NavigationItemInterface";
import { twMerge } from "tailwind-merge";
import Socials from "../socials/Socials";
import NavbarItem from "./NavbarItem";

interface OverlayProps {
  isOpen: boolean;
  toggle: () => void;
  items: Array<NavigationItemInterface>;
}

/**
 * Fullscreen overlay used on mobile to display the navigation links and socials when the hamburger icon is tapped.
 * Relies on the shared Sheet component for focus trapping and gestures.
 *
 * @param isOpen Whether the overlay is visible.
 * @param toggle Callback to close the panel.
 * @param items NAV_ITEMS array to render.
 * @returns Overlay content tree or null on desktop widths.
 */
const NavbarOverlay: React.FC<OverlayProps> = ({ isOpen, toggle, items }) => {
  const isMobile: boolean = useMediaQuery("(max-width: 976px)");

  if (!isMobile) {
    return null;
  }

  const overlayStyle = twMerge(
    `fixed top-0 right-0 h-screen w-full z-40 
    transform ${isOpen ? "translate-x-0" : "translate-x-full"}
    transition-all duration-700 ease-in-out
    bg-white dark:bg-neutral-900 overflow-y-auto
    backdrop-blur-xl 
    bg-opacity-60 dark:bg-opacity-60
    flex flex-col justify-between`,
    "bg-neutral-50/60 dark:bg-neutral-900/60 backdrop-blur-xl",
  );

  return (
    <div className={overlayStyle}>
      <div className="items-center justify-center space-y-8 md:space-y-0 pt-20">
        {/* Links */}
        {items
          .filter((item) => item.isMain)
          .map((item, index) => {
            return (
              <div key={index} className="flex justify-center w-full md:w-auto">
                <NavbarItem href={item.path}>{item.label}</NavbarItem>
              </div>
            );
          })}
      </div>

      <div className="w-full pb-20">
        <Socials iconSize={40} />
      </div>
    </div>
  );
};

export default NavbarOverlay;
