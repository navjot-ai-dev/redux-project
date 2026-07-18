import { useDispatch, useSelector } from 'react-redux';

import CollectionCard from '../components/CollectionCard';
import { clearCollection, clearToast } from '../redux/features/collection';

const CollectionPage = ({ theme }) => {
  const collection = useSelector((state) => state.collection?.items ?? []);
  const dispatch = useDispatch();
  const isDark = theme === 'dark';

  const clearAll = () => {
    dispatch(clearCollection());
    dispatch(clearToast());
  };

  return (
    <div className='mx-auto min-h-screen max-w-6xl px-3 py-6 sm:px-4 lg:px-6'>
      {collection.length > 0 ? (
        <>
          <div className={`mb-6 flex flex-col gap-3 rounded-2xl border p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between ${isDark ? 'border-green-800/40 bg-black/50 shadow-green-950/20' : 'border-sky-200 bg-white/80 shadow-sky-100'}`}>
            <div>
              <p className={`mb-1 text-[11px] font-semibold uppercase tracking-[0.25em] ${isDark ? 'text-green-400' : 'text-sky-700'}`}>Saved Gallery</p>
              <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>Your Collection</h2>
              <p className={`mt-1 text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Keep your favorite photos, videos, and GIFs in one place.</p>
            </div>

            <div className='flex items-center gap-2'>
              <div className={`rounded-full px-3 py-1.5 text-xs ${isDark ? 'border border-green-700/40 bg-green-500/10 text-green-200' : 'border border-sky-200 bg-sky-50 text-sky-700'}`}>
                {collection.length} saved
              </div>
              <button
                onClick={clearAll}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition active:scale-95 ${isDark ? 'border border-red-500/30 bg-red-500/10 text-red-200 hover:bg-red-500/20' : 'border border-red-200 bg-red-50 text-red-600 hover:bg-red-100'}`}
              >
                Clear All
              </button>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'>
            {collection.map((item, idx) => (
              <CollectionCard key={idx} item={item} theme={theme} />
            ))}
          </div>
        </>
      ) : (
        <div className='flex min-h-[60vh] items-center justify-center'>
          <div className={`glass-card w-full max-w-xl rounded-3xl px-6 py-8 text-center ${isDark ? 'border-green-800/30' : 'border-sky-200'}`}>
            <div className='mb-3 text-4xl'>🌿</div>
            <h2 className={`mb-2 text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>Collection is Empty</h2>
            <p className={`mx-auto max-w-lg text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Search for media and save your favorites to build a polished collection here.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionPage