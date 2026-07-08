import axios from "axios";


const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASHED_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;


export function fetchPhotos(){
   const res = axios.get(`https://api.unsplash.com/search/photos`);

  console.log(res);
  
}