import { useDispatch, useSelector } from 'react-redux';

import CollectionCard from '../components/CollectionCard';
import { clearCollection, clearToast } from '../redux/features/collection';

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection?.items ?? []);
  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(clearCollection());
    dispatch(clearToast());
  };

  return (
    <div className='mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-10'>
      {collection.length > 0 ? (
        <>
          <div className='mb-8 flex flex-col gap-4 rounded-2xl border border-green-800/40 bg-black/50 p-6 shadow-lg shadow-green-950/20 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <p className='mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-green-400'>Saved Gallery</p>
              <h2 className='text-3xl font-semibold text-white'>Your Collection</h2>
              <p className='mt-2 text-sm text-gray-400'>Keep your favorite photos, videos, and GIFs in one place.</p>
            </div>

            <div className='flex items-center gap-3'>
              <div className='rounded-full border border-green-700/40 bg-green-500/10 px-4 py-2 text-sm text-green-200'>
                {collection.length} saved
              </div>
              <button
                onClick={clearAll}
                className='rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-200 transition hover:bg-red-500/20 active:scale-95'
              >
                Clear All
              </button>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'>
            {collection.map((item, idx) => (
              <CollectionCard key={idx} item={item} />
            ))}
          </div>
        </>
      ) : (
        <div className='flex min-h-[70vh] items-center justify-center'>
          <div className='glass-card w-full max-w-2xl rounded-3xl border border-green-800/30 px-8 py-12 text-center'>
            <div className='mb-4 text-5xl'>🌿</div>
            <h2 className='mb-3 text-3xl font-semibold text-white'>Collection is Empty</h2>
            <p className='mx-auto max-w-lg text-base text-gray-400'>Search for media and save your favorites to build a polished collection here.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionPage