import { create } from "zustand";

interface NavbarStore {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

/**
 * Manages the state of the navbar.
 * In mobile, the expanded navbar is closed.
 * Clicking the hamburger icon toggles the navbar (open or closed).
 * Clicking a link in the navbar minimises the navbar.
 * - `isOpen`: whether the navbar is open or not
 * - `toggle`: function to toggle the navbar (if open, close it; if closed, open it)
 * - `open`: function to open the navbar
 * - `close`: function to close the navbar
 */
export const useNavbarStore = create<NavbarStore>((set) => ({
  isOpen: false, // initial navbar is closed
  toggle: () => set((state) => ({ isOpen: !state.isOpen })), // toggle navbar
  open: () => set({ isOpen: true }), // open navbar
  close: () => set({ isOpen: false }), // close navbar
}));
