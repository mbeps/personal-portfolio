import { useMediaQuery } from "@/hooks/useMediaQuery";
import NavigationItemInterface from "@/interfaces/NavigationItemInterface";
import Overlay from "../sheet/Sheet";
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

  return (
    <Overlay
      isOpen={isOpen}
      toggle={toggle}
      className="bg-neutral-50/60 dark:bg-neutral-900/60 backdrop-blur-xl"
    >
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
    </Overlay>
  );
};

export default NavbarOverlay;
