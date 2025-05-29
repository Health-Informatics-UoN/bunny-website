import { Manrope } from "next/font/google";

import { cn } from "@/src/lib/utils";
import { ShimmerButton } from "@/src/components/shimmer-button";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";

const font = Manrope({ weight: "500", subsets: ["latin"] });
export const Hero = () => {
  return (
    <div className="px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-12">
        <div className="mb-8 flex justify-center">
          <img alt="" src="./logos/bunny.svg" className="h-30 w-auto" />
        </div>
        <div className="text-center">
          <h1
            className={cn(
              "text-2xl font-semibold text-black dark:text-white text-balance sm:text-5xl leading-loose",
              font.className
            )}
          >
            Unlock insights, simplify discovery.
          </h1>
          <p
            className={cn(
              "text-gray-500 dark:text-white text-lg mt-10",
              font.className
            )}
          >
            Your solution for secure, federated, and open source Cohort Discovery.
          </p>
          <div className="mt-16 flex items-center justify-center gap-x-6">
            <Link href='https://hutch.health/bunny/quickstart' target="_blank">
              <ShimmerButton className="flex" background="#4BA6EE" shimmerSize="2px" shimmerDuration="2s">
                <span
                  className={cn(
                    "flex items-center gap-2 opacity-90 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-xl",
                    font.className
                  )}
                >
                  Try Bunny
                </span>
              </ShimmerButton>
            </Link>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <Button variant="ghost" asChild className="text-black dark:text-white dark:hover:text-black">
              <Link href='https://github.com/health-informatics-uon/hutch-bunny' target="_blank">
                <img src="/logos/github.svg" alt="GitHub" className="h-5 w-5" /> 
                Github
              </Link>
            </Button>
            <Button variant="ghost" asChild className="text-black dark:text-white dark:hover:text-black">
              <Link href='https://hutch.health/bunny' target="_blank">
                <ArrowRight className="h-5 w-5" /> 
                Documentation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
