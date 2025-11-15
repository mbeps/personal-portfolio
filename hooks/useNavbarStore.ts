import { create } from "zustand";

interface NavbarStore {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

/**
 * A Zustand store for managing the state of the mobile navigation bar.
 * This provides a simple way to control the open/closed state from any component.
 *
 * @property isOpen - `true` if the navbar is open, `false` otherwise.
 * @property toggle - A function to toggle the navbar's state.
 * @property open - A function to explicitly open the navbar.
 * @property close - A function to explicitly close the navbar.
 */
export const useNavbarStore = create<NavbarStore>((set) => ({
  isOpen: false, // initial navbar is closed
  toggle: () => set((state) => ({ isOpen: !state.isOpen })), // toggle navbar
  open: () => set({ isOpen: true }), // open navbar
  close: () => set({ isOpen: false }), // close navbar
}));
