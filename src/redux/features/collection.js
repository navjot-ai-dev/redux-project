import { createSlice } from "@reduxjs/toolkit";


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

          }

    }
})

export const{
    addCollection,
    removeCollection,
    clearCollection
} = CollectionSlice.actions

export default CollectionSlice.reducer