import React, { useState } from "react";
import {
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
} from "@/components/shadcn/ui/command";
import { RiSearchLine } from "react-icons/ri";

const SearchButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  const baseButtonClass =
    "group p-2.5 rounded-full transition-colors duration-1000";
  const darkButtonClass = "dark:bg-black dark:hover:bg-white";
  const lightButtonClass = "bg-white hover:bg-black";

  const baseIconClass = "transition-colors duration-700";
  const darkIconClass = "dark:text-white dark:group-hover:text-black";
  const lightIconClass = "text-black group-hover:text-white";

  return (
    <>
      <button
        className={`${baseButtonClass} ${darkButtonClass} ${lightButtonClass}`}
        onClick={() => setOpen((open) => !open)}
      >
        <RiSearchLine
          size={25}
          className={`${baseIconClass} ${darkIconClass} ${lightIconClass}`}
        />
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchButton;
