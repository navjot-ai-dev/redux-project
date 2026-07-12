import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchslice';

const Search = () => {
  const [text, settext] = useState('');

  const search = (e) => {
    settext(e.target.value);
  };

  const dispatch = useDispatch();

  return (
    <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setQuery(text));
          settext('');
        }}
        className='glass-card glow-ring flex flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-center sm:p-6'
      >
        <input
          required
          type='text'
          placeholder='Search anything...'
          value={text}
          onChange={search}
          className='w-full rounded-xl border border-green-800/50 bg-black/70 px-4 py-3 text-lg text-green-50 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-500/30'
        />
        <button className='btn-primary rounded-xl px-6 py-3 text-lg shadow-lg active:scale-95'>Search</button>
      </form>
    </div>
  );
};

export default Search