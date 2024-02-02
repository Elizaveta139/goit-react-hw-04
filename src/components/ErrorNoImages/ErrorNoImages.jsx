import css from './ErrorNoImages.module.css';

export function ErrorNoImages() {
  return <p className={css.error}>Oops, there are no images matching your search...</p>;
}
