import { useEffect } from "react";
import {FetchPhotos,Fetchvideos,Fetchggif} from "../api/mediaApi";
import {setQuery,setError,setLoading,setResults,setActiveTab  } from "../redux/features/searchslice";
import { useDispatch,useSelector } from "react-redux";

const Resultgrid = () => {

  const dispatch = useDispatch();

  const { query, error, loading, results, activeTab } = useSelector((store) => store.search);

  useEffect(function () {
    const getData = async () => {

      let data
      
      if(activeTab == 'photos'){
        let response = await FetchPhotos(query)
        data = response.results.map((item) => ({
          id: item.id,
         type: 'photo',
          alt_description: item.alt_description,  
          thumbnail: item.urls.thumb,
          src: item.urls.full,
        }))
      }
      if(activeTab == 'videos'){
        let response = await Fetchvideos(query)
        data = response.videos.map((item) => ({
          id:item.id,
          type: 'video',      
          alt_description:item.user.name || 'video' ,
          thumbnail:item.image ,
          src:item.url ,
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
        })) 
      }

     
      dispatch(setResults(data));
    }

    getData();
  
  },[query,activeTab])
   
  return (
    <div> </div>
  )
}

export default Resultgrid