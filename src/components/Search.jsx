import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchslice';

const Search = ({ theme }) => {
  const [text, settext] = useState('');
  const isDark = theme === 'dark';

  const search = (e) => {
    settext(e.target.value);
  };

  const dispatch = useDispatch();

  return (
    <div className='mx-auto max-w-6xl px-3 py-4 sm:px-4 lg:px-6'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setQuery(text));
          settext('');
        }}
        className={`glass-card flex flex-col gap-2 rounded-2xl border p-3 sm:flex-row sm:items-center ${isDark ? 'glow-ring' : ''}`}
      >
        <input
          required
          type='text'
          placeholder='Search anything...'
          value={text}
          onChange={search}
          className={`w-full rounded-xl border px-3 py-2 text-sm outline-none transition focus:ring-2 ${isDark ? 'border-green-800/50 bg-black/70 text-green-50 placeholder:text-green-100/40 focus:border-green-400 focus:ring-green-500/30' : 'border-sky-200 bg-[#fffdf7] text-slate-700 placeholder:text-slate-400 focus:border-sky-400 focus:ring-sky-300/40'}`}
        />
        <button className={`rounded-xl px-4 py-2 text-sm font-semibold shadow-sm active:scale-95 ${isDark ? 'btn-primary' : 'bg-gradient-to-r from-sky-500 via-emerald-500 to-yellow-400 text-white'}`}>Search</button>
      </form>
    </div>
  );
};

export default Search