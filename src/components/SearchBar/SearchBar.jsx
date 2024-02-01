import toast from 'react-hot-toast';
import { BsSearch } from 'react-icons/bs';
import css from './SearchBar.module.css';

export function SearchBar({ onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();

    const data = e.target.elements.query.value;

    if (data.trim() === '') {
      toast.error('Enter text to search for images!');
      return;
    }

    onSearch(data);
    e.target.reset();
  }

  return (
    <header className={css.header}>
      <div className={css.divForm}>
        <form className={css.searchForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.btnForm}>
            <BsSearch size="24" />
          </button>
        </form>
      </div>
    </header>
  );
}
