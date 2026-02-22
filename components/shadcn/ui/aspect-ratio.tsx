"use client";

import * as React from "react";

const AspectRatio = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & { ratio?: number }>(
  ({ ratio = 1, style, ...props }, ref) => (
    <div style={{ position: "relative", width: "100%", aspectRatio: ratio }}>
      <div
        ref={ref}
        style={{ ...style, position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
        {...props}
      />
    </div>
  )
);
AspectRatio.displayName = "AspectRatio";

export { AspectRatio };
