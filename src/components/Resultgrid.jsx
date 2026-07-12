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
      <div className='min-h-screen flex items-center justify-center'>
        <div className='glass-effect-strong px-8 py-12 rounded-2xl text-center max-w-md animate-fade-in'>
          <div className='text-4xl mb-4'>⚠️</div>
          <h1 className='text-2xl font-bold text-red-400 mb-2'>Oops! Error Occurred</h1>
          <p className='text-gray-300'>Something went wrong while fetching your results. Please try again.</p>
        </div>
      </div>
    )
  }
  if (loading) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center gap-6'>
        <div className='spinner'></div>
        <div className='glass-effect px-6 py-4 rounded-xl'>
          <p className='text-lg font-semibold text-indigo-300 animate-pulse'>Loading amazing content...</p>
        </div>
      </div>
    )
  }
   
  return (
    <div className='px-6 py-12 min-h-screen '>
      <div id="card" className='flex flex-wrap justify-center gap-6 max-w-full '>
        {results.length === 0 ? (
          <div className='col-span-full flex items-center justify-center py-20'>
            <p className='text-gray-400 text-lg'>No results found. Try searching for something else.</p>
          </div>
        ) : (
          results.map((item, idx) => {
            return <div key={idx} className='animate-fade-in' style={{ animationDelay: `${idx * 0.05}s` }}>
              <ResultCard item={item} />
            </div>
          })
        )}
      </div>
    </div>
  )
}

export default Resultgrid