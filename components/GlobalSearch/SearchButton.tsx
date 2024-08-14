import React from "react";
import { RiSearchLine } from "react-icons/ri";

const SearchButton: React.FC = () => {
  const baseButtonClass =
    "group p-2.5 rounded-full transition-colors duration-1000";
  const darkButtonClass = "dark:bg-black dark:hover:bg-white";
  const lightButtonClass = "bg-white hover:bg-black";

  const baseIconClass = "transition-colors duration-700";
  const darkIconClass = "dark:text-white dark:group-hover:text-black";
  const lightIconClass = "text-black group-hover:text-white";

  return (
    <button
      className={`${baseButtonClass} ${darkButtonClass} ${lightButtonClass}`}
    >
      <RiSearchLine
        size={25}
        className={`${baseIconClass} ${darkIconClass} ${lightIconClass}`}
      />
    </button>
  );
};

export default SearchButton;
