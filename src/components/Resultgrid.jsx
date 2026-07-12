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
    return <h1>Error</h1>
  }
  if (loading) {
    return <h1>Loading...</h1>
  }
   
  return (
    <div className="flex flex-wrap justify-center px-10 py-20 gap-5 overflow-auto">
      {results.map((item,idx) => {
         return <div  key={idx}>
         <ResultCard  item={item} />
         </div>
      })}
       </div>
  )
}

export default Resultgrid