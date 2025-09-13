import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist, NetworkFirst, CacheFirst } from "serwist";

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
  // Disable navigation preload to avoid issues
  navigationPreload: false,

  // Add runtime caching for better offline support
  runtimeCaching: [
    {
      // Cache pages with Network First strategy
      matcher: ({ request }) => request.destination === "document",
      handler: new NetworkFirst({
        cacheName: "pages",
        networkTimeoutSeconds: 3,
        plugins: [
          {
            cacheWillUpdate: async ({ response }) => {
              return response?.status === 200 ? response : null;
            },
          },
        ],
      }),
    },
    {
      // Cache static assets
      matcher: ({ request }) =>
        request.destination === "script" ||
        request.destination === "style" ||
        request.destination === "font",
      handler: new CacheFirst({
        cacheName: "static-resources",
        plugins: [
          {
            cacheWillUpdate: async ({ response }) => {
              return response?.status === 200 ? response : null;
            },
          },
        ],
      }),
    },
    {
      // Cache images
      matcher: ({ request }) => request.destination === "image",
      handler: new CacheFirst({
        cacheName: "images",
        plugins: [
          {
            cacheWillUpdate: async ({ response }) => {
              return response?.status === 200 ? response : null;
            },
          },
        ],
      }),
    },
  ],
});

serwist.addEventListeners();
