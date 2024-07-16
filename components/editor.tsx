"use client";

import { PartialBlock } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";

import { useEdgeStore } from "@/lib/edgestore";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ initialContent, onChange, editable = true }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({ file });
    return response.url;
  };

  const editor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile: handleUpload,
  });
  return (
    <BlockNoteView
      editor={editor}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      onChange={() => onChange(JSON.stringify(editor.document, null, 2))}
      editable={editable}
    />
  );
};

export default Editor;
