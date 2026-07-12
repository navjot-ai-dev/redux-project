import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-20 border-b border-green-900/40 bg-black/70 backdrop-blur-xl'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10'>
        <div>
          <h2 className='text-2xl font-semibold tracking-wide text-green-400'>Media Search</h2>
          <p className='text-sm text-green-100/70'>Discover, save, and explore</p>
        </div>

        <div className='flex items-center gap-3'>
          <Link className='rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-200 transition hover:bg-green-500/20' to='/'>Search</Link>
          <Link className='rounded-full border border-green-500/30 bg-black/60 px-4 py-2 text-sm font-medium text-green-100 transition hover:bg-green-500/20' to='/collection'>Collection</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar