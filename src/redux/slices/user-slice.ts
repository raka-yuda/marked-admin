import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  name: string;
}

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  token: string;
  cart: Product[];
}

const initialState = {
  user: null,
  isLoggedIn: false,
  token: "",
  cart: [],
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state, action) {
      const user = action.payload;
      const { username, token } = user;
      localStorage.setItem("token", token);
      state.user!.username = username;
      state.token = token;
      state.isLoggedIn = true;
    },
    userLogout(state) {
      localStorage.removeItem("token");
      state.isLoggedIn = false;
    },
    addProductToUserCart(state, action) {
      const product = action.payload;
      const { id } = product;
      const existingProduct = state.cart.find((product) => product.id === id);
      if (!existingProduct) {
        state.cart = state.cart.concat(product);
      }
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchProducts.pending, (state, action) => {
  //         state.status = "loading";
  //       })
  //       .addCase(
  //         fetchProducts.fulfilled,
  //         (state, { payload }: PayloadAction<Product[]>) => {
  //           state.status = "succeeded";
  //           // Add any fetched posts to the array
  //           state.products = state.products.concat(payload);
  //         }
  //       )
  //       .addCase(fetchProducts.rejected, (state, action) => {
  //         state.status = "failed";
  //         state.error = action.payload;
  //       });
  //   },
});

export const { userLogin, userLogout, addProductToUserCart } =
  userSlice.actions;

export default userSlice.reducer;
