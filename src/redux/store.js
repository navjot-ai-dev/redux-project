import {configureStore} from '@reduxjs/toolkit'
import searchSlice from './features/searchslice'        

export const Store = configureStore({
    reducer: {
       search: searchSlice,
    }
})