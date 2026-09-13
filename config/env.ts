/**
 * Centralised environment variable accessor.
 * Returns validated client variables with default fallbacks.
 */
export const DEFAULT_SITE_URL = "https://www.maruf-bepary.com";

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;
}

export const env = {
  get NEXT_PUBLIC_SITE_URL() {
    return getSiteUrl();
  },
};
