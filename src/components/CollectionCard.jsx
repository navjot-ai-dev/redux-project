import { useDispatch } from 'react-redux';
import { removeCollection, removeToast } from '../redux/features/collection';

const CollectionCard = ({ item, theme }) => {
  const dispatch = useDispatch();
  const isDark = theme === 'dark';

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id));
    dispatch(removeToast());
  };

  const title = item.alt_description || item.title || 'Saved media';
  const badgeLabel = item.type?.toUpperCase() || 'MEDIA';

  return (
    <div className={`result-card relative h-72 w-full overflow-hidden rounded-xl ${isDark ? 'border-green-800/20 bg-[#061109]' : 'border-sky-200 bg-[#fffef9]'}`}>
      <a target='_blank' className='block h-full' href={item.url}>
        {item.type === 'photo' ? (
          <img className='h-full w-full object-cover object-center' src={item.src} alt={title} />
        ) : null}
        {item.type === 'video' ? (
          <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video>
        ) : null}
        {item.type === 'gif' ? (
          <img className='h-full w-full object-cover object-center' src={item.src} alt={title} />
        ) : null}
      </a>

      <div className='absolute inset-x-0 top-0 flex items-center justify-between p-2'>
        <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${isDark ? 'border border-green-400/30 bg-black/60 text-green-200' : 'border border-sky-300 bg-white/80 text-sky-700'}`}>
          {badgeLabel}
        </span>
      </div>

      <div className={`absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-linear-to-t px-3 py-3 text-sm ${isDark ? 'from-black via-black/80 to-transparent text-white' : 'from-[#1f4a3d] via-[#2d6a53]/80 to-transparent text-white'}`}>
        <h2 className='h-12 overflow-hidden text-xs font-semibold capitalize leading-5'>{title}</h2>
        <button
          onClick={() => removeFromCollection(item)}
          className='rounded-full bg-red-500/90 px-2.5 py-1 text-[11px] font-semibold text-white transition hover:bg-red-400 active:scale-95'
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard