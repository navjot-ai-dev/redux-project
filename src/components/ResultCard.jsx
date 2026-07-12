import { useDispatch } from 'react-redux';
import { addCollection, addedToast } from '../redux/features/collection';

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToSaved = () => {
    dispatch(addCollection(item));
    dispatch(addedToast());
  };

  return (
    <div className='result-card relative h-80 w-[33vh] min-w-[250px]'>
      <a target='_blank' href={item.url} className='block h-full'>
        <div className='h-80 overflow-hidden'>
          {item.type === 'photo' && <img src={item.src} alt={item.alt_description} className='h-80 w-full rounded-t-xl object-cover' />}
          {item.type === 'video' && <video src={item.src} className='h-80 w-full rounded-t-xl object-cover' autoPlay muted loop />}
          {item.type === 'gif' && <img src={item.src} alt={item.alt_description} className='h-80 w-full rounded-t-xl object-cover' />}
        </div>
      </a>

      <div id='bottom' className='absolute bottom-0 flex w-full items-center justify-between gap-2 p-4 text-white'>
        <h2 className='h-14 overflow-hidden text-sm font-semibold capitalize'>
          {item.alt_description || 'Untitled media'}
        </h2>
        <button
          onClick={addToSaved}
          className='rounded-full bg-green-500/90 px-3 py-1.5 text-sm font-semibold text-black transition hover:bg-green-400'
        >
          save
        </button>
      </div>
    </div>
  );
};

export default ResultCard