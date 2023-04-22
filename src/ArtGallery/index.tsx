import React, { useState } from "react";
import { Photo } from "./types";
import style from "./index.module.css";

interface ArtGalleryProps {
  photos: Photo[];
}

export const ArtGallery: React.FC<ArtGalleryProps> = ({ photos }) => {
  if (!photos.length) {
    return null;
  }

  const [indexActivePhoto, setIndexActivePhoto] = useState(0);
  const activePhoto = photos[indexActivePhoto];
  const prevPhoto = photos[indexActivePhoto - 1];
  const nextPhoto = photos[indexActivePhoto + 1];

  return (
    <div className={style.gallery}>
      <div className="style.container">
        <MainPhoto
          prevPhoto={prevPhoto}
          currentPhoto={activePhoto}
          nexPhoto={nexPhoto}
          className={style.mainPhoto}
        />
        <Nuvigation
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
