import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/product-slice";
import userReducer from "./slices/user-slice";
// import usersReducer from "../features/users/usersSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
