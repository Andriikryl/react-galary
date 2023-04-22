import { CommonClassProps, Photo } from "../types";
import cl from "classnames";
import style from "./index.module.css";
interface MainPhotoProps extends CommonClassProps {
  prevPhoto?: Photo;
  activePhoto: Photo;
  nextPhoto?: Photo;
}

export const MainPhoto: React.FC<MainPhotoProps> = ({
  prevPhoto,
  activePhoto,
  nextPhoto,
  className,
}) => (
  <div className={cl(className, style.mainPhoto)}>
    {prevPhoto && (
      <img
        src={prevPhoto.src}
        alt={prevPhoto.description}
        className={style.mainPhotoImagePrev}
      />
    )}
    <img
      src={activePhoto.src}
      alt={activePhoto.description}
      className={style.mainPhotoImage}
    />
    {nextPhoto && (
      <img
        src={nextPhoto.src}
        alt={nextPhoto.description}
        className={style.mainPhotoImageNext}
      />
    )}
  </div>
);
