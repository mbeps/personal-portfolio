import { beforeEach, describe, expect, it, vi } from "vitest";
import useIsMounted from "@/hooks/use-is-mounted";

const { mockUseState, mockUseEffect, getMockEffect, getSetStateSpy } =
  vi.hoisted(() => {
    let capturedEffect: (() => (() => void) | undefined) | undefined;
    const setStateSpy = vi.fn();
    const mockUseState = vi.fn((initial: boolean) => [initial, setStateSpy]);
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

describe("useIsMounted", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize with false and return the initial state", () => {
    const isMounted = useIsMounted();

    expect(mockUseState).toHaveBeenCalledWith(false);
    expect(isMounted).toBe(false);
  });

  it("should register a useEffect hook with an empty dependency array", () => {
    useIsMounted();

    expect(mockUseEffect).toHaveBeenCalledWith(expect.any(Function), []);
  });

  it("should set state to true on mount and set state to false on cleanup", () => {
    useIsMounted();

    const effectCallback = getMockEffect();
    expect(typeof effectCallback).toBe("function");

    const setStateSpy = getSetStateSpy();

    // Trigger effect callback (mount)
    const cleanup = effectCallback!();
    expect(setStateSpy).toHaveBeenCalledWith(true);
    expect(typeof cleanup).toBe("function");

    // Trigger cleanup callback (unmount)
    cleanup!();
    expect(setStateSpy).toHaveBeenCalledWith(false);
  });
});
