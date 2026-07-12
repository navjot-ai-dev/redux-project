import { useDispatch } from 'react-redux';
import { addCollection, addedToast } from '../redux/features/collection';


const ResultCard = ({ item }) => {

  const dispatch = useDispatch();

  const addToSaved = () => {

    dispatch(addCollection(item));
    dispatch(addedToast())

  }

  return (
      

    <div className='w-[35vh] h-80 relative bg-white rounded-xl '>
       <a target="_blank" href={item.url}>
     <div className=' h-80 '>
     {item.type == 'photo' && <img src={item.src} alt={item.alt_description} className='w-full h-80 rounded-lg object-center object-cover' />}
     {item.type == 'video' && <video src={item.src} className='w-full h-80 rounded-lg object-center object-cover' autoPlay muted />}
     {item.type == 'gif' && <img src={item.src} alt={item.alt_description} className='w-full h-80 rounded-lg object-center object-cover' />}


     </div>
     </a>
     <div id='bottom' className='flex gap-2 justify-between items-center w-full p-4 absolute bottom-0 text-white'>
      <h2 className='text-sm font-semibold capitalize h-14 overflow-hidden'>
        {item.alt_description}
        </h2>
        <button onClick={addToSaved} className='bg-indigo-600 hover:bg-indigo-900 text-white font-semibold py-1 px-2 rounded'>
          save
        </button>
     </div>
     
    </div>
  )
}

    


export default ResultCard