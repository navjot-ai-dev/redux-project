import React from 'react'
import { Fetchggif, FetchPhotos, Fetchvideos } from './api/mediaApi'

const App = () => {



 const getData = async () => {
   const data = await FetchPhotos('cat')
   console.log(data.results)
  } 

  const getData2 = async () => {
   const data2 = await Fetchvideos('cat')
   console.log(data2.videos)
  } 
   const getData3 = async () => {
   const data3 = await Fetchggif('elephant')
   console.log(data3.results)
  } 


  return (
    <div className='h-screen w-full bg-gray-950 text-white flex justify-center items-center'>
      <button onClick={getData} className='h-10 w-30 bg-green-600 m-10'>get data</button>
      <button onClick={getData2} className='h-10 w-30 bg-amber-600'>get data2</button>
      <button onClick={getData3} className='h-10 w-30 bg-red-600'>get data3</button>
      
      </div>
  )
}

export default App