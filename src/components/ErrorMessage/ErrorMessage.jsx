import css from './ErrorMessage.module.css';

export function ErrorMessage() {
  return (
    <p className={css.errorMessage}>Oops, there was an error, please try reloading the page!</p>
  );
}
