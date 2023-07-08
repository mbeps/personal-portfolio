"use client";

import Gallery from "@/components/Gallery/Gallery";
import React from "react";

const page: React.FC = () => {
  return (
    <div>
      <Gallery
        images={[
          "/projects/convo-gpt.png",
          "/projects/osmos-game.png",
          "/projects/circus-discussions-fyp.png",
          "/projects/drumroll-music.png",
          "/projects/noodle.png",
          "/projects/ringmaster-messaging.png",
          "/projects/sideshow-articles.png",
          "/projects/circus-discussions-fyp.png",
          "/projects/circus-discussions-fyp.png",

          "/projects/drumroll-music.png",
          "/projects/noodle.png",
          "/projects/ringmaster-messaging.png",

          "/projects/drumroll-music.png",
          "/projects/noodle.png",
          "/projects/ringmaster-messaging.png",
        ]}
      />
    </div>
  );
};
export default page;
