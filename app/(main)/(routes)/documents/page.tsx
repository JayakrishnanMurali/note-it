"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const DocumentsPage = () => {
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        className="dark:hidden"
        src="/empty-light.svg"
        alt="empty"
        width={300}
        height={300}
      />
      <Image
        className="dark:block hidden"
        src="/empty.svg"
        alt="empty"
        width={300}
        height={300}
      />

      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Knotit
      </h2>

      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
