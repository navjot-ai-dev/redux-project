import { useDispatch } from 'react-redux';
import { removeCollection, removeToast } from '../redux/features/collection';

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id));
    dispatch(removeToast());
  };

  const title = item.alt_description || item.title || 'Saved media';
  const badgeLabel = item.type?.toUpperCase() || 'MEDIA';

  return (
    <div className='result-card relative h-80 w-full overflow-hidden rounded-2xl'>
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

      <div className='absolute inset-x-0 top-0 flex items-center justify-between p-3'>
        <span className='rounded-full border border-green-400/30 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-green-200'>
          {badgeLabel}
        </span>
      </div>

      <div className='absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-linear-to-t from-black via-black/70 to-transparent px-4 py-4 text-white'>
        <h2 className='h-14 overflow-hidden text-sm font-semibold capitalize leading-6'>{title}</h2>
        <button
          onClick={() => removeFromCollection(item)}
          className='rounded-full bg-red-500/90 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-red-400 active:scale-95'
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard