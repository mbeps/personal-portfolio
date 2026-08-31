import { beforeEach, describe, expect, it } from "vitest";
import { useNavbarStore } from "@/hooks/use-navbar-store";

describe("useNavbarStore", () => {
  beforeEach(() => {
    // Reset store state before each test
    useNavbarStore.setState({ isOpen: false });
  });

  it("should have initial state with isOpen as false", () => {
    const state = useNavbarStore.getState();
    expect(state.isOpen).toBe(false);
  });

  describe("open", () => {
    it("should set isOpen to true when closed", () => {
      useNavbarStore.getState().open();
      expect(useNavbarStore.getState().isOpen).toBe(true);
    });

    it("should keep isOpen as true when already open (idempotent)", () => {
      useNavbarStore.setState({ isOpen: true });
      useNavbarStore.getState().open();
      expect(useNavbarStore.getState().isOpen).toBe(true);
    });
  });

  describe("close", () => {
    it("should set isOpen to false when open", () => {
      useNavbarStore.setState({ isOpen: true });
      useNavbarStore.getState().close();
      expect(useNavbarStore.getState().isOpen).toBe(false);
    });

    it("should keep isOpen as false when already closed (idempotent)", () => {
      useNavbarStore.setState({ isOpen: false });
      useNavbarStore.getState().close();
      expect(useNavbarStore.getState().isOpen).toBe(false);
    });
  });

  describe("toggle", () => {
    it("should toggle isOpen from false to true", () => {
      useNavbarStore.getState().toggle();
      expect(useNavbarStore.getState().isOpen).toBe(true);
    });

    it("should toggle isOpen from true to false", () => {
      useNavbarStore.setState({ isOpen: true });
      useNavbarStore.getState().toggle();
      expect(useNavbarStore.getState().isOpen).toBe(false);
    });

    it("should alternate state correctly on multiple consecutive toggles", () => {
      expect(useNavbarStore.getState().isOpen).toBe(false);

      useNavbarStore.getState().toggle();
      expect(useNavbarStore.getState().isOpen).toBe(true);

      useNavbarStore.getState().toggle();
      expect(useNavbarStore.getState().isOpen).toBe(false);

      useNavbarStore.getState().toggle();
      expect(useNavbarStore.getState().isOpen).toBe(true);
    });
  });

  describe("sequential state transitions", () => {
    it("should handle arbitrary sequences of open, close, and toggle calls", () => {
      const store = useNavbarStore.getState();

      store.open();
      expect(useNavbarStore.getState().isOpen).toBe(true);

      store.open();
      expect(useNavbarStore.getState().isOpen).toBe(true);

      store.toggle();
      expect(useNavbarStore.getState().isOpen).toBe(false);

      store.close();
      expect(useNavbarStore.getState().isOpen).toBe(false);

      store.toggle();
      expect(useNavbarStore.getState().isOpen).toBe(true);

      store.close();
      expect(useNavbarStore.getState().isOpen).toBe(false);
    });
  });
});
