import {configureStore} from '@reduxjs/toolkit'
import searchSlice from './features/searchslice'        
import collectionSlice from './features/collection'        

export const Store = configureStore({
    reducer: {
       search: searchSlice,
       collection: collectionSlice,
    }
})