import { useDispatch } from 'react-redux';
import { addCollection, addedToast } from '../redux/features/collection';

const ResultCard = ({ item, theme }) => {
  const dispatch = useDispatch();
  const isDark = theme === 'dark';

  const addToSaved = () => {
    dispatch(addCollection(item));
    dispatch(addedToast());
  };

  return (
    <div className={`result-card relative h-64 w-44 min-w-44 overflow-hidden rounded-xl sm:h-72 sm:w-55 sm:min-w-55 ${isDark ? 'border-green-800/20 bg-[#061109]' : 'border-sky-200 bg-[#fffef9]'}`}>
      <a target='_blank' href={item.url} className='block h-full'>
        <div className='h-64 overflow-hidden sm:h-72'>
          {item.type === 'photo' && <img src={item.src} alt={item.alt_description} className='h-64 w-full rounded-t-xl object-cover sm:h-72' />}
          {item.type === 'video' && <video src={item.src} className='h-64 w-full rounded-t-xl object-cover sm:h-72' autoPlay muted loop />}
          {item.type === 'gif' && <img src={item.src} alt={item.alt_description} className='h-64 w-full rounded-t-xl object-cover sm:h-72' />}
        </div>
      </a>

      <div id='bottom' className={`absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-linear-to-t px-3 py-3 text-sm ${isDark ? 'from-black via-black/80 to-transparent text-white' : 'from-[#1f4a3d] via-[#2d6a53]/80 to-transparent text-white'}`}>
        <h2 className='h-12 overflow-hidden text-xs font-semibold capitalize leading-5'>
          {item.alt_description || 'Untitled media'}
        </h2>
        <button
          onClick={addToSaved}
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition ${isDark ? 'bg-green-500/90 text-black hover:bg-green-400' : 'bg-sky-500 text-white hover:bg-sky-400'}`}
        >
          save
        </button>
      </div>
    </div>
  );
};

export default ResultCard