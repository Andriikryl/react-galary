import { CommonClassProps, Photo } from "../types";

interface PreviewGalleryProps extends CommonClassProps {
  activePhotoIndex?: number;
  photos: Photo[];
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({
  activePhotoIndex,
  photos,
}) => <div>Preview gallery</div>;
