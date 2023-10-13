import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { client } from "../../helpers/api/client";

const path = "products";
const url = "https://fakestoreapi.com/" + path;

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface ProductsState {
  products: Product[];
  product: Product | null;
  cart: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: any;
}

const initialState = {
  products: [],
  product: null,
  cart: [],
  status: "idle",
  error: null,
} as ProductsState;

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    console.log(url);
    const response = await client.get(url);
    return response;
  }
);

// export const addNewPost = createAsyncThunk(
//   'posts/addNewPost',
//   async (initialPost) => {
//     const response = await client.post('/fakeApi/posts', { post: initialPost })
//     return response.post
//   }
// )

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectOneProduct(state, action) {
      const payload = action.payload;
      state.product = {
        ...state.product,
        ...payload,
      };
    },
    addProductToCart(state, action) {
      const product = action.payload;
      const { id } = product;
      const existingProduct = state.cart.find((product) => product.id === id);
      if (!existingProduct) {
        state.cart = state.cart.concat(product);
      }
      console.log(state.cart);
    },
    // postUpdated(state, action) {
    //   const { id, title, content } = action.payload;
    //   const existingPost = state.posts.find((post) => post.id === id);
    //   if (existingPost) {
    //     existingPost.title = title;
    //     existingPost.content = content;
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, { payload }: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          // Add any fetched posts to the array
          state.products = state.products.concat(payload);
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { selectOneProduct, addProductToCart } = productsSlice.actions;

export default productsSlice.reducer;

export const selectAllProducts = (state: ProductsState) => state.products;

// export const selectPostById = (state, postId) =>
//   state.posts.posts.find((post) => post.id === postId)
