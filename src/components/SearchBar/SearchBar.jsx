import toast from 'react-hot-toast';
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
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
