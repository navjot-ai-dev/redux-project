import { useEffect } from 'react';
import { FetchPhotos, Fetchvideos, Fetchggif } from '../api/mediaApi';
import { setQuery, setError, setLoading, setResults, setActiveTab } from '../redux/features/searchslice';
import { useDispatch, useSelector } from 'react-redux';
import ResultCard from './ResultCard';

const Resultgrid = ({ theme }) => {
  const dispatch = useDispatch();
  const { query, error, loading, results, activeTab } = useSelector((store) => store.search);
  const isDark = theme === 'dark';

  useEffect(function () {
   
     if (!query) {
      return 
     }

    const getData = async () => {

     try {
          dispatch(setLoading())

       let data = []
      
      if(activeTab == 'photos'){
        let response = await FetchPhotos(query)
        data = response.results.map((item) => ({
          id: item.id,
         type: 'photo',
          alt_description: item.alt_description,  
          thumbnail: item.urls.thumb,
          src: item.urls.full,
          url: item.links.html,
        }))
      }
      if(activeTab == 'videos'){
        let response = await Fetchvideos(query)
        data = response.videos.map((item) => ({
          id:item.id,
          type: 'video',      
          alt_description:item.user.name || 'video' ,
          thumbnail:item.image ,
          src:item.video_files[0].link ,
          url:item.url
          
        }))
      }
      if(activeTab == 'gif'){
        let response = await Fetchggif(query)
        data = response.results.map((item) => ({
          id: item.id,
          type: 'gif',
          alt_description: item.title,
          thumbnail: item.media_formats.tinygif.url,
          src: item.media_formats.gif.url,
          url:item.url
        })) 
      }

     
      dispatch(setResults(data));
      
     } catch (err) {
       dispatch(setError(err))
     }

    }

    getData();
  
  },[query,activeTab])

  if (error) {
    return (
      <div className='flex min-h-[50vh] items-center justify-center px-3'>
        <div className={`glass-card max-w-md rounded-2xl px-6 py-8 text-center ${isDark ? 'border-red-500/20' : 'border-sky-200'}`}>
          <div className='mb-3 text-3xl'>⚠️</div>
          <h1 className='mb-2 text-xl font-bold text-red-400'>Oops! Error Occurred</h1>
          <p className={isDark ? 'text-gray-300' : 'text-slate-600'}>Something went wrong while fetching your results. Please try again.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className='flex min-h-[50vh] flex-col items-center justify-center gap-4 px-3'>
        <div className={`h-8 w-8 animate-spin rounded-full border-4 ${isDark ? 'border-green-900/30 border-t-green-400' : 'border-sky-200 border-t-sky-500'}`}></div>
        <div className={`glass-card rounded-xl px-4 py-3 ${isDark ? '' : 'border-sky-200'}`}>
          <p className={`text-sm font-semibold ${isDark ? 'text-green-300' : 'text-sky-700'}`}>Loading amazing content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='mx-auto min-h-screen max-w-6xl px-3 py-6 sm:px-4 lg:px-6'>
      <div className='flex flex-wrap justify-center gap-4'>
        {results.length === 0 ? (
          <div className='flex items-center justify-center py-12'>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>No results found. Try searching for something else.</p>
          </div>
        ) : (
          results.map((item, idx) => (
            <div key={idx} className='flex items-center justify-center'>
              <ResultCard item={item} theme={theme} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Resultgrid