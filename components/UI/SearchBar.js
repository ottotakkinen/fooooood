import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onChange }) => {
  return (
    <form className="max-w-md relative text-slate-800 col-span-3">
      <input
        type="text"
        className="py-2 px-4 w-full rounded-full shadow-md"
        placeholder="Search for recipe"
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        onClick={(e) => e.preventDefault()}
        className="absolute top-0 right-0 h-full px-4"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
