import React from "react";
import { Photo } from "./types";

interface ArtGalleryProps {
  photos: Photo[];
}

export const ArtGallery: React.FC<ArtGalleryProps> = ({ photos }) => {
  if (!photos.length) {
    return null;
  }
  return <div>My gallery</div>;
};
