"use client";

import { FlickeringGrid } from "@/src/components/flickering-grid";
import { Hero } from "@/src/components/hero";
import Partners from "@/src/components/partners";
import {Features} from "@/src/components/features";

export default function Page() {
  return (
    <>
      <div className="container mx-auto relative z-10 max-h-screen">
        <Hero />
        <Partners />
        <Features />
      </div>
    </>
  );
}
