import React, { useState } from "react";
import { FileOrFolder } from "./types";
import { useDataRoomApi } from "./api";
import { PaperClipIcon, XMarkIcon } from "@heroicons/react/24/outline";

export const DataRoom: React.FC = () => {
  const { files, uploadFile } = useDataRoomApi();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl mb-2 border-b">My Data Room</h1>

      <div className="flex flex-col items-stretch border-t">
        {files.map((file, i) => (
          <FileOrFolderRow key={i} file={file} />
        ))}
      </div>
    </div>
  );
};

export const FileOrFolderRow: React.FC<{ file: FileOrFolder }> = ({ file }) => {
  return (
    <div
      tabIndex={0}
      className="flex flex-row gap-4 border-b p-2 hover:bg-blue-100 active:bg-blue-300"
    >
      <PaperClipIcon className="size-6" />
      <div>{file.name}</div>
    </div>
  );
};
