import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items:JSON.parse(localStorage.getItem())
}

const CollectionSlice = createSlice({

    name:'collection',
    initialState
})