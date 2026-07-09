import React, { useState } from 'react'

const Search = () => {
  const [text, settext] = useState('');
  const search = (e) =>{
    settext(e.target.value)
  }

  return (
    <div>
     <form className='flex justify-between p-6 '>
         <input
         required
         type="text" placeholder='Search anything...' value={text}
         onChange={search} className=' border-2 px-4 py-2 text-xl w-2/2 mx-10 rounded-2xl ' />
         <button className=' border-2 px-4 py-2 text-xl  rounded-2xl active:scale-75'>Search</button>
     </form>

    </div>
  )
}

export default Search