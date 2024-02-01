import css from './ImageCard.module.css';

export function ImageCard({ item }) {
  return (
    <div>
      <img
        className={css.img}
        src={item.urls.small}
        alt={item.alt_description}
        width="420"
        height="280"
        loading="lazy"
      />
    </div>
  );
}
