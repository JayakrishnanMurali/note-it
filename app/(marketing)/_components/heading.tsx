"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

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

      {isLoading && (
        <div className="flex justify-center items-center w-full">
          <Spinner size="lg" />
        </div>
      )}

      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button size="sm">
            Get Knotit free
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}

      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Knotit
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
    </div>
  );
};
