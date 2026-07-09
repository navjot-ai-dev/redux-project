import {configureStore} from '@reduxjs/toolkit'
import searchSlice from './features/searchslice'        

export const store = configureStore({
    reducer: {
       search: searchSlice,
    }
})