import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./boardSlice";
export default configureStore({
  reducer: {
    board: cardReducer,
  },
});
