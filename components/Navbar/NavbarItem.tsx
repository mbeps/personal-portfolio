import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { NavbarContext } from "./Navbar";

interface NavbarItemProps {
  to: string;
  children: React.ReactNode;
  isSamePage?: boolean;
  active?: boolean;
}

/**
 * A button to be displayed on the navbar.
 * This button can redirect to a different page or scroll to an element on the same page.
 * It also highlights the current page by making the button bold.
 *
 * @param to (string) The path to navigate to
 * @param children (React.ReactNode) The content of the navbar item
 * @param isSamePage (boolean) Whether the path is on the same page
 * @param active (boolean) Whether the navbar item is active
 * @returns (JSX.Element): a navbar item to be displayed on the navbar
 */
const NavbarItem = ({
  to,
  children,
  isSamePage = false,
  active = false,
}: NavbarItemProps) => {
  const router = useRouter();
  const { setNavbar } = useContext(NavbarContext); // get the setNavbar function from context

  const handleClick = () => {
    if (isSamePage) {
      const element = document.getElementById(to);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      } else {
        router.push(to);
      }
    } else {
      router.push(to);
    }
    setNavbar(false); // close the navbar when a button is clicked
  };

  const navbarItemStyle = `block lg:inline-block ${
    active ? "font-bold" : "font-normal"
  } text-neutral-900 dark:text-neutral-100 cursor-pointer transition-all hover:font-bold duration-300 hover:bg-gray-200 dark:hover:bg-red-950 dark:hover:text-neutral-200 rounded-xl px-4 py-3 m-2 w-full md:w-24 text-center`;

  return (
    <button onClick={handleClick} className={navbarItemStyle}>
      {children}
    </button>
  );
};

export default NavbarItem;
