import axios from "axios";


const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASHED_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const KILPY_KEY = import.meta.env.VITE_KILPY_KEY;


export async function FetchPhotos(query,page=1,per_page=20){
   const res = await axios.get(`https://api.unsplash.com/search/photos`,
    {
      params:{query,page,per_page},
      headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    }
   );

  return res.data;
  
} 


export async function Fetchvideos(query,per_page=20){
   const res = await axios.get(`https://api.pexels.com/videos/search`,
    {
      params:{query,per_page},
      headers:{Authorization:`Client-ID ${PEXELS_KEY}`}
    }
   );

  return res.data;
  
} 

export async function Fetchggif(query){
   const res = await axios.get("https://api.klipy.com/v2/search", {
    params: {
      q: query,
      key: KILPY_KEY,
      limit: 20,
    },
  }
   );

  return res.data;
  
} 