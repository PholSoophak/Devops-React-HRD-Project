import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import categorySlice from "./slice/categorySlice";
import taskSlice from "./slice/taskSlice";


export default configureStore({
    reducer:{
        auth:authSlice,
        category:categorySlice,
        task:taskSlice
    }
})