import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark';

  return (
    <nav className={`sticky top-0 z-20 border-b backdrop-blur-xl ${isDark ? 'border-green-900/40 bg-black/70' : 'border-sky-200 bg-[#fffdf5]/90'}`}>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-3 py-3 sm:px-4 lg:px-6'>
        <div>
          <h2 className={`text-lg font-semibold tracking-wide ${isDark ? 'text-green-400' : 'text-sky-700'}`}>Media Search</h2>
          <p className={`text-xs ${isDark ? 'text-green-100/70' : 'text-slate-600'}`}>Discover, save, and explore</p>
        </div>

        <div className='flex items-center gap-2'>
          <Link className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${isDark ? 'border border-green-500/30 bg-green-500/10 text-green-200 hover:bg-green-500/20' : 'border border-sky-300 bg-white text-sky-700 hover:bg-sky-50'}`} to='/'>Search</Link>
          <Link className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${isDark ? 'border border-green-500/30 bg-black/60 text-green-100 hover:bg-green-500/20' : 'border border-emerald-300 bg-[#f4fdf3] text-emerald-700 hover:bg-emerald-50'}`} to='/collection'>Collection</Link>
          <button
            onClick={toggleTheme}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${isDark ? 'border border-green-500/30 bg-green-500/10 text-green-200 hover:bg-green-500/20' : 'border border-amber-300 bg-[#fff8dc] text-amber-700 hover:bg-[#fff2b8]'}`}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar