import { configureStore } from "@reduxjs/toolkit";
//import { GetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { articleApi} from './article'

export const store = configureStore({
    reducer: {[articleApi.reducerPath]: articleApi.reducer},
    middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(articleApi.middleware)
});