import axios from "axios";


const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASHED_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;


export async function FetchPhotos(query,page=1,per_page=20){
   const res = await axios.get(`https://api.unsplash.com/search/photos`,
    {
      params:{query,page,per_page},
      headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    }
   );

  console.log(res.data);
  
}