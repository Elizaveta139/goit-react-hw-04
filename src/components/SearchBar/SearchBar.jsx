import css from './SearchBar.module.css';

export function SearchBar() {
  return (
    <header>
      <form>
        <input type="text" autocomplete="off" autoFocus placeholder="Search images and photos" />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
