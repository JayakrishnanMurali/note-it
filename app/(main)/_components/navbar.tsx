"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { MenuIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { Banner } from "./banner";
import { Title } from "./title";

interface NavBarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

export const NavBar = ({ isCollapsed, onResetWidth }: NavBarProps) => {
  const params = useParams();
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<"documents">,
  });

  if (document === undefined)
    return (
      <div className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center">
        <Title.Skeleton />
      </div>
    );

  if (document === null) return null;

  return (
    <>
      <nav className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center gap-x-4">
        {isCollapsed && (
          <MenuIcon
            role="button"
            onClick={onResetWidth}
            className="w-6 h-6 text-muted-foreground"
          />
        )}

        <div className="flex items-center justify-between w-full">
          <Title initialData={document} />
        </div>
      </nav>

      {document.isArchived && <Banner documentId={document._id} />}
    </>
  );
};