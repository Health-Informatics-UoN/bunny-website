import { Manrope } from "next/font/google";

import { cn } from "../lib/utils";
import { ShimmerButton } from "./shimmer-button";
import Link from "next/link";

const font = Manrope({ weight: "500", subsets: ["latin"] });
export const Hero = () => {
  return (
    <div className="px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-24">
        <div className="mb-8 flex justify-center">
          <img alt="" src="./logos/bunny1.png" className="h-30 w-auto" />
        </div>
        <div className="text-center">
          <h1
            className={cn(
              "text-2xl font-semibold text-balance text-white sm:text-5xl leading-loose",
              font.className
            )}
          >
            Unlock insights, simplify discovery.
          </h1>
          <p className="text-gray-600 text-lg mt-10">
            Your solution for quick, secure, open source Federated Discovery.
          </p>
          <div className="mt-16 flex items-center justify-center gap-x-6">
            <Link href="/bunny">
              <ShimmerButton className="flex" borderRadius="2px" background="#4E46DD">
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
        </div>
      </div>
    </div>
  );
};
