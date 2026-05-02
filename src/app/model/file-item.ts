import { FileType } from "./file-type";

export interface FileItem {
  name: string;
  type: FileType;
  size?: string;
  itemsCount?: number; // for folders
  shared?: number;
  modified?: string;
}
