import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter"; // exported default, can name anything
import authReducer from "./auth";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
});

export default store;
