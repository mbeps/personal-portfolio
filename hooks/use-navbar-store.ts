import { create } from "zustand";

interface NavbarStore {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

/**
 * Zustand store controlling the mobile navbar overlay so the header, overlay, and nav items can all read/write the same state.
 *
 * @property isOpen Indicates whether the overlay is visible.
 * @property toggle Flips the `isOpen` flag.
 * @property open Forces the overlay open.
 * @property close Forces the overlay closed.
 */
export const useNavbarStore = create<NavbarStore>((set) => ({
  isOpen: false, // initial navbar is closed
  toggle: () => set((state) => ({ isOpen: !state.isOpen })), // toggle navbar
  open: () => set({ isOpen: true }), // open navbar
  close: () => set({ isOpen: false }), // close navbar
}));
