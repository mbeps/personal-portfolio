"use client";

import Gallery from "@/components/Gallery/Gallery";
import React from "react";

const page: React.FC = () => {
  return (
    <div>
      <Gallery
        images={["/projects/convo-gpt.png", "/projects/osmos-game.png"]}
      />
    </div>
  );
};
export default page;
