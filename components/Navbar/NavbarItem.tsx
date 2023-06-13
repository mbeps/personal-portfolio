import { useRouter } from "next/navigation";
import React from "react";

interface NavbarItemProps {
  to: string;
  children: React.ReactNode;
  isSamePage?: boolean;
  active?: boolean;
}

const NavbarItem = ({
  to,
  children,
  isSamePage = false,
  active = false,
}: NavbarItemProps) => {
  const router = useRouter();

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
  };

  const navbarItemStyle = `block lg:inline-block ${
    active ? "font-bold" : "font-normal"
  } text-neutral-900 dark:text-neutral-100 cursor-pointer transition-all hover:font-bold duration-300 hover:bg-gray-200 dark:hover:bg-red-950 dark:hover:text-neutral-200 rounded-lg px-4 py-3 m-2 w-full md:w-24 text-center`;

  return (
    <button onClick={handleClick} className={navbarItemStyle}>
      {children}
    </button>
  );
};

export default NavbarItem;
