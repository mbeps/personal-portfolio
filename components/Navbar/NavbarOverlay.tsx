import { NavItem } from "@/types/pages";
import Socials from "../Socials/Socials";
import NavbarItem from "./NavbarItem";
import Overlay from "../Sheet/Sheet";

interface OverlayProps {
  isOpen: boolean;
  toggle: () => void;
  items: Array<NavItem>;
}

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
        <Socials />
      </div>
    </Overlay>
  );
};

export default NavbarOverlay;
