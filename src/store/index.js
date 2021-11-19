import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice";
export default configureStore({
  reducer: {
    cards: cardReducer,
  },
});
