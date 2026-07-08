import React from 'react'
import { FetchPhotos } from './api/mediaApi'

const App = () => {

  function getData(){
    FetchPhotos('cat')
  } 

  return (
    <div className='h-screen w-full bg-gray-950 text-white'>
      <button onClick={getData}>get data</button>
      </div>
  )
}

export default App