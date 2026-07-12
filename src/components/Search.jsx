import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { setQuery } from '../redux/features/searchslice';
const Search = () => {


  const [text, settext] = useState('');

  const search = (e) =>{
    settext(e.target.value)
  }

  const dispatch = useDispatch()

  return (
    <div>
     <form onSubmit={(e) => 
      {
        e.preventDefault();
        dispatch(setQuery(text))
        
        settext('');
        
      }} className='flex bg-gray-800 p-6 '>
         <input
         required
         type="text" placeholder='Search anything...' value={text}
         onChange={search} className=' border-2 px-4 py-2 text-xl w-full mx-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ' />
         <button className=' border-2 px-4 py-2 text-xl cursor-pointer rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500s active:scale-75'>Search</button>
     </form>

    </div>
  )
}

export default Search