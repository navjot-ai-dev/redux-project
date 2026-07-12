import { useEffect } from "react";
import {FetchPhotos,Fetchvideos,Fetchggif} from "../api/mediaApi";
import {setQuery,setError,setLoading,setResults,setActiveTab  } from "../redux/features/searchslice";
import { useDispatch,useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const Resultgrid = () => {

  const dispatch = useDispatch();

  const { query, error, loading, results, activeTab } = useSelector((store) => store.search);

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
      <div className='flex min-h-screen items-center justify-center px-4'>
        <div className='glass-card max-w-md rounded-2xl px-8 py-12 text-center'>
          <div className='mb-4 text-4xl'>⚠️</div>
          <h1 className='mb-2 text-2xl font-bold text-red-400'>Oops! Error Occurred</h1>
          <p className='text-gray-300'>Something went wrong while fetching your results. Please try again.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className='flex min-h-screen flex-col items-center justify-center gap-6 px-4'>
        <div className='h-10 w-10 animate-spin rounded-full border-4 border-green-900/30 border-t-green-400'></div>
        <div className='glass-card rounded-xl px-6 py-4'>
          <p className='animate-pulse text-lg font-semibold text-green-300'>Loading amazing content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='mx-auto min-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-10'>
      <div className='flex flex-wrap justify-center gap-6'>
        {results.length === 0 ? (
          <div className='flex items-center justify-center py-20'>
            <p className='text-lg text-gray-400'>No results found. Try searching for something else.</p>
          </div>
        ) : (
          results.map((item, idx) => (
            <div key={idx} className='flex items-center justify-center'>
              <ResultCard item={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Resultgrid