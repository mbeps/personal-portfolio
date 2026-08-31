import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useMediaQuery } from "@/hooks/use-media-query";

const {
  mockUseState,
  mockUseEffect,
  getMockEffect,
  getSetStateSpy,
  setCurrentState,
} = vi.hoisted(() => {
  let capturedEffect: (() => (() => void) | undefined) | undefined;
  let currentState = false;
  const setStateSpy = vi.fn((val: boolean) => {
    currentState = val;
  });
  const mockUseState = vi.fn((_initial: boolean) => [
    currentState,
    setStateSpy,
  ]);
  const mockUseEffect = vi.fn(
    (cb: () => (() => void) | undefined, _deps?: any[]) => {
      capturedEffect = cb;
    },
  );

  return {
    mockUseState,
    mockUseEffect,
    getMockEffect: () => capturedEffect,
    getSetStateSpy: () => setStateSpy,
    setCurrentState: (val: boolean) => {
      currentState = val;
    },
  };
});

vi.mock("react", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react")>();
  return {
    ...actual,
    useState: mockUseState,
    useEffect: mockUseEffect,
  };
});

describe("useMediaQuery", () => {
  const originalWindow = global.window;

  beforeEach(() => {
    vi.clearAllMocks();
    setCurrentState(false);
  });

  afterEach(() => {
    global.window = originalWindow;
  });

  describe("SSR behavior", () => {
    it("should return false when window is undefined", () => {
      // @ts-expect-error - Simulating undefined window in SSR
      delete global.window;

      const result = useMediaQuery("(max-width: 768px)");

      expect(result).toBe(false);
      expect(mockUseState).toHaveBeenCalledWith(false);
    });
  });

  describe("Client environment & effect lifecycle", () => {
    let addEventListenerMock: ReturnType<typeof vi.fn>;
    let removeEventListenerMock: ReturnType<typeof vi.fn>;
    let listeners: Record<string, ((event?: any) => void)[]>;
    let matchesValue: boolean;

    beforeEach(() => {
      listeners = {};
      matchesValue = false;
      addEventListenerMock = vi.fn(
        (event: string, handler: (event?: any) => void) => {
          if (!listeners[event]) listeners[event] = [];
          listeners[event].push(handler);
        },
      );
      removeEventListenerMock = vi.fn(
        (event: string, handler: (event?: any) => void) => {
          if (listeners[event]) {
            listeners[event] = listeners[event].filter((h) => h !== handler);
          }
        },
      );

      // Setup window mock
      global.window = {
        matchMedia: vi.fn().mockImplementation((query: string) => ({
          matches: matchesValue,
          media: query,
          onchange: null,
          addEventListener: addEventListenerMock,
          removeEventListener: removeEventListenerMock,
          dispatchEvent: vi.fn(),
        })),
      } as unknown as Window & typeof globalThis;
    });

    it("should register media query listener with dependency on query string and update state on effect mount", () => {
      matchesValue = true;

      const initialResult = useMediaQuery("(min-width: 1024px)");
      expect(initialResult).toBe(false);

      expect(mockUseEffect).toHaveBeenCalledWith(expect.any(Function), [
        "(min-width: 1024px)",
      ]);

      // Trigger client effect
      const effectCallback = getMockEffect();
      expect(typeof effectCallback).toBe("function");

      const cleanup = effectCallback!();

      expect(global.window.matchMedia).toHaveBeenCalledWith(
        "(min-width: 1024px)",
      );
      const setStateSpy = getSetStateSpy();
      expect(setStateSpy).toHaveBeenCalledWith(true);
      expect(addEventListenerMock).toHaveBeenCalledWith(
        "change",
        expect.any(Function),
      );

      // Trigger cleanup
      cleanup!();
      expect(removeEventListenerMock).toHaveBeenCalledWith(
        "change",
        expect.any(Function),
      );
    });

    it("should respond to media query change events and update matches", () => {
      matchesValue = false;

      useMediaQuery("(prefers-color-scheme: dark)");

      const effectCallback = getMockEffect();
      expect(typeof effectCallback).toBe("function");

      effectCallback!();
      const setStateSpy = getSetStateSpy();
      expect(setStateSpy).toHaveBeenCalledWith(false);

      // Simulate matchMedia change event
      matchesValue = true;
      const changeHandler = listeners.change?.[0];
      expect(changeHandler).toBeDefined();

      changeHandler();
      expect(setStateSpy).toHaveBeenCalledWith(true);
    });

    it("should handle false initial matches value correctly", () => {
      matchesValue = false;

      useMediaQuery("(max-width: 480px)");

      const effectCallback = getMockEffect();
      expect(typeof effectCallback).toBe("function");

      effectCallback!();
      const setStateSpy = getSetStateSpy();
      expect(setStateSpy).toHaveBeenCalledWith(false);
    });
  });
});
