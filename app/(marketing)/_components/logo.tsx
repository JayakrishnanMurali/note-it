import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        className="dark:hidden"
        alt="Logo"
        height="40"
        width="40"
      />
      <Image
        src="/logo-dark.svg"
        className="hidden dark:block"
        alt="Logo"
        height="40"
        width="40"
      />
      <p className={cn("font-semibold", font.className)}>Knotit</p>
    </div>
  );
};
