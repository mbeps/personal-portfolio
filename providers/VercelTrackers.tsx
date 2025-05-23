"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

/**
 * This component provides the Vercel specific providers to the whole app.
 * These providers track the performance and usage of the app.
 *
 * @returns the children wrapped in all the providers
 * @requires SpeedInsights Vercel provider to collecting data about the performance of the app
 * @requires Analytics Vercel provider to collect data about the usage of the app
 */
export function VercelTrackers() {
  return (
    <>
      <SpeedInsights />
      <Analytics mode={"production"} />
    </>
  );
}
