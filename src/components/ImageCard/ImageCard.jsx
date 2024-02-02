import css from './ImageCard.module.css';

export function ImageCard({ item, openModal }) {
  const { urls, alt_description, description, likes, user } = item;

  function onOpenModal(e) {
    e.preventDefault();
    openModal({ urls: urls.regular, description, likes, user: user.name });
  }

  return (
    <a onClick={onOpenModal}>
      <img
        className={css.img}
        src={urls.small}
        alt={alt_description}
        width="420"
        height="280"
        loading="lazy"
      />
    </a>
  );
}
