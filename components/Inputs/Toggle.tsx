"use client";

import { Switch } from "@headlessui/react";

interface ToggleProps {
  checked: boolean;
}

export default function Toggle({ checked }: ToggleProps) {
  return (
    <div className="py-4" style={{ pointerEvents: "none" }}>
      <Switch
        checked={checked}
        onChange={() => {}}
        className={`${checked ? "bg-green-700" : "bg-red-900"}
					relative inline-flex h-[30px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${checked ? "translate-x-6" : "translate-x-0"}
						pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
