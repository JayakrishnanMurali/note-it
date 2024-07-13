"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your notes, your way. Welcome to{" "}
        <span className="underline">Knotit</span>
      </h1>

      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Knotit is a note-taking app for everyone. <br /> It&apos;s simple, fast,
        and beautiful. Get started today!
      </h3>

      <Button>
        Enter Knotit
        <ArrowRightIcon className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
