import React, { useState } from 'react'

const Search = () => {


  const [text, settext] = useState('');

  const search = (e) =>{
    settext(e.target.value)
  }

  const dispatch = useDispa

  return (
    <div>
     <form onSubmit={(e) => 
      {
        e.preventDefault();
        console.log('form submitted');
        
        settext('');
        
      }} className='flex bg-gray-800 p-6 '>
         <input
         required
         type="text" placeholder='Search anything...' value={text}
         onChange={search} className=' border-2 px-4 py-2 text-xl w-full mx-10 rounded-xl ' />
         <button className=' border-2 px-4 py-2 text-xl  rounded-xl active:scale-75'>Search</button>
     </form>

    </div>
  )
}

export default Search