export interface ImagePreviewView {
  id: number;
  name: string;
  thumbnail: Uint8Array;
  thumbnailType: string;
  tags: string[];
}
