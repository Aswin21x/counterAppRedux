import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./counterslice";


const store = configureStore({
reducer:{
    counterslice

}


})

export default store