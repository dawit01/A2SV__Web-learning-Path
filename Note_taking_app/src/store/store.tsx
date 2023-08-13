import { configureStore } from "@reduxjs/toolkit";
import { notesSlice } from "../reducer/reducer";



export const store = configureStore({
    reducer: {
      storedList: notesSlice.reducer, // can be any name just used by useSelector hook
    },
  });