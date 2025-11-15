"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

/**
 * A component that integrates Vercel's analytics and speed insights into the application.
 * This is intended to be used in the root layout to track performance and user behavior.
 * It is conditionally rendered only in the production environment.
 *
 * @returns A fragment containing the `SpeedInsights` and `Analytics` components from Vercel.
 */
export function VercelTrackers() {
  return (
    <>
      <SpeedInsights />
      <Analytics mode={"production"} />
    </>
  );
}
