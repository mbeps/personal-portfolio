import { create } from "zustand";

interface NavbarStore {
  isOpen: boolean;
  toggle: () => void;
}

/**
 * Manages the state of the navbar.
 * In mobile, the expanded navbar is closed.
 * Clicking the hamburger icon toggles the navbar (open or closed).
 * Clicking a link in the navbar minimises the navbar.
 * - `isOpen`: whether the navbar is open or not
 * - `toggle`: function to toggle the navbar
 */
export const useNavbarStore = create<NavbarStore>((set) => ({
  isOpen: false, // initial navbar is closed
  toggle: () => set((state) => ({ isOpen: !state.isOpen })), // toggle navbar
}));
