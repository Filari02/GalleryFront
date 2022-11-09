export interface ImageView {
  id: number;
  name: string;
  uploadDate: Date;
  description: string;
  file: Uint8Array;
  fileType: string;
  username: string;
  tags: string[];
}
