import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist } from "serwist";

// This declares the value of `injectionPoint` to TypeScript.
declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  // Precache entries injected by Serwist during build
  precacheEntries: self.__SW_MANIFEST,
  // Skip waiting for service worker activation
  skipWaiting: true,
  // Take control of all open clients immediately
  clientsClaim: true,
  // Enable navigation preload for faster page loads
  navigationPreload: true,
});

serwist.addEventListeners();
