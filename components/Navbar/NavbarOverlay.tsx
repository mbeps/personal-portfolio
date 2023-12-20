import NavItem from "@/types/pages";
import Socials from "../Socials/Socials";
import NavbarItem from "./NavbarItem";
import Overlay from "../Sheet/Sheet";

interface OverlayProps {
  isOpen: boolean;
  toggle: () => void;
  items: Array<NavItem>;
}

/**
 * Overlay component that pops up from the right side of the screen.
 * This displays the links to other pages when the hamburger menu is clicked.
 * It allows the user to navigate to other pages.
 * It is necessary on mobile devices because the navbar is hidden on mobile devices.
 * @param isOpen (boolean) - Whether the overlay is open or not
 * @param toggle (function) - Function to toggle the overlay
 * @param items (NavItem[]) - Array of NavItem objects to display in the overlay
 * @returns (JSX.Element) - Overlay component
 */
const NavbarOverlay: React.FC<OverlayProps> = ({ isOpen, toggle, items }) => {
  return (
    <Overlay isOpen={isOpen} toggle={toggle}>
      <div
        className="
					items-center justify-center 
					space-y-8 md:space-x-6 md:space-y-0
					md:flex 
					pt-20 
				"
      >
        {/* Links */}
        {items.map((item, index) => {
          return (
            <div key={index} className="flex justify-center w-full md:w-auto">
              <NavbarItem to={item.page}>{item.label}</NavbarItem>
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
