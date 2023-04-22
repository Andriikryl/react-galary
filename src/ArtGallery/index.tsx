import React, { useState } from "react";
import { Photo } from "./types";
import style from "./index.module.css";
import { MainPhoto } from "./MainPhoto";
import { PreviewGallery } from "./PreviewGallery";
import { Navigation } from "./Navigation";

interface ArtGalleryProps {
  photos: Photo[];
}

export const ArtGallery: React.FC<ArtGalleryProps> = ({ photos }) => {
  const [indexActivePhoto, setIndexActivePhoto] = useState(0);
  const activePhoto = photos[indexActivePhoto];
  const prevPhoto = photos[indexActivePhoto - 1];
  const nextPhoto = photos[indexActivePhoto + 1];

  if (!photos.length) {
    return null;
  }

  return (
    <div className={style.gallery}>
      <div className="style.container">
        <MainPhoto
          prevPhoto={prevPhoto}
          activePhoto={activePhoto}
          nextPhoto={nextPhoto}
          className={style.mainPhoto}
        />
        <Navigation
          className={style.navigation}
          disabledPrev={!prevPhoto}
          disabledNext={!nextPhoto}
          onPrevClick={() => {
            setIndexActivePhoto(indexActivePhoto - 1);
          }}
          onNextClick={() => {
            setIndexActivePhoto(indexActivePhoto + 1);
          }}
        />
      </div>
      <PreviewGallery
        activePhotoIndex={indexActivePhoto}
        photos={photos}
        className={style.PreviewList}
      />
    </div>
  );
};
