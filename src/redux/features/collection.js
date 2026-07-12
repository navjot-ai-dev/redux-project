import { createSlice } from "@reduxjs/toolkit";
 import { toast ,Zoom} from 'react-toastify';


const initialState = {
    items:JSON.parse(localStorage.getItem('savedItems')) || []
}

const CollectionSlice = createSlice({

    name:'collection',
    initialState,
    reducers:{
        addCollection:(state,action)=>{
             const alreadyExist = state.items.find(
                item => item.id == action.payload.id
             )
             if (!alreadyExist) {
                state.items.push(action.payload)
                localStorage.setItem('savedItems',JSON.stringify(state.items)) 
             }
          },
          removeCollection:(state,action)=>{
           state.items = state.items.filter(
            item => item.id !== action.payload
           )
            localStorage.setItem('savedItems',JSON.stringify(state.items)) 

          },
          clearCollection:(state,action) =>{
            state.items = []
            localStorage.removeItem('savedItems')

          },
          addedToast:()=>{
            toast.success('Added to collection!✅', {
           position: "top-center",
            autoClose: 2000,
              hideProgressBar: false,
           closeOnClick: true,
         pauseOnHover: true,
                draggable: true,
           progress: undefined,
             theme: "dark",
            transition: Zoom,
 });
          },
          removeToast:()=>{
            toast.error('Removed from collection!❌', {
           position: "top-center",
            autoClose: 2000,
              hideProgressBar: false,
           closeOnClick: true,
         pauseOnHover: true,
                draggable: true,
           progress: undefined,
             theme: "dark",
            transition: Zoom,
 });
          }

    }
})

export const{
    addCollection,
    removeCollection,
    clearCollection,
    addedToast,
    removeToast
} = CollectionSlice.actions

export default CollectionSlice.reducer