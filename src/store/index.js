import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./logIn";

const store=configureStore({
    reducer:{token:tokenSlice.reducer}
})

export default store;