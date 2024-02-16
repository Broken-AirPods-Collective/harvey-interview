import { useState } from "react";
import { FileOrFolder } from "./types";

const fakeInitialData: FileOrFolder[] = [
  { name: "fooBar", kind: "file", fileSize: 123 },
  { name: "fooBar", kind: "file", fileSize: 123 },
  { name: "fooBar", kind: "file", fileSize: 123 },
  { name: "fooBar", kind: "file", fileSize: 123 },
  { name: "fooBar", kind: "file", fileSize: 123 },
  { name: "fooBar", kind: "file", fileSize: 123 },
];

export function useDataRoomApi() {
  const [files, setFiles] = useState(fakeInitialData);

  return {
    files,
    uploadFile: () => {},
  };
}
