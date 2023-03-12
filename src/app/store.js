import { configureStore } from "@reduxjs/toolkit";
import songsSlice from "../features/songs/SongsSlice";

const store = configureStore({
  reducer: {
    songs: songsSlice,
  },
});

export default store;
