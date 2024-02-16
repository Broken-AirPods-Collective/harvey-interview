export type FileOrFolder = {
  name: string;
} & (
  | {
      kind: "folder";
      children: FileOrFolder[];
    }
  | {
      kind: "file";
      fileSize: number;
    }
);
