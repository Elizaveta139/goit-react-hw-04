import css from './ImageGallery.module.css';
import { ImageCard } from '../ImageCard/ImageCard';

export function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.gallery}>
      {images.map(image => {
        return (
          <li key={image.id} className={css.galleryItem}>
            <ImageCard item={image} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
}
