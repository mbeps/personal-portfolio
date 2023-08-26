import { NavItem } from "@/types/pages";
import NavbarItem from "./NavbarItem";

interface OverlayProps {
  isOpen: boolean;
  toggle: () => void;
  items: Array<NavItem>;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen, toggle, items }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-full z-40 
      transform ${isOpen ? "translate-x-0" : "translate-x-full"}
      transition-all duration-700 ease-in-out
      bg-white dark:bg-stone-900 overflow-y-auto
			backdrop-blur-xl 
      bg-opacity-60 dark:bg-opacity-60 
			`}
    >
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
    </div>
  );
};

export default Overlay;
