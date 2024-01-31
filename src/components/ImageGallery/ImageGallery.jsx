import css from './ImageGallery.module.css';
import { ImageCard } from '../ImageCard/ImageCard';

export function ImageGallery({ images }) {
  return (
    <ul>
      {images.map(image => {
        return (
          <li key={image.id}>
            <ImageCard item={image} />
          </li>
        );
      })}
    </ul>
  );
}
