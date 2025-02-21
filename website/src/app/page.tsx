"use client";

import { Hero } from "../components/hero";
import { FlickeringGrid } from "../components/flickering-grid";
import Partners from "../components/partners";

export default function Page() {
  return (
    <>
      <div className="container mx-auto relative z-10 mb-20 max-h-screen">
        <Hero />
        <Partners />
      </div>
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={12}
        color="#4BA6EE"
        maxOpacity={0.3}
        flickerChance={0.5}
      />
    </>
  );
}
