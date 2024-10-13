// import css from './SearchBar.module.css'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.error('Text must be entered to search for images');

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const inputValue = evt.currentTarget.elements.search.value.trim();
    console.log('inputValue: ', inputValue);

    if (inputValue === '') {
      notify();
      console.log('search is EMPTY');
    }
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
