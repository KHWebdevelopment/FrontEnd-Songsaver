import { createSlice } from "@reduxjs/toolkit";
import songs from "./songs"

export const songsSlice = createSlice({
  name: "songs",
  initialState:{
    songs: songs,
    filteredSongs: songs
  },
  reducers: {
    addSong: (state, action) => {
      state.songs.push(action.payload);
      state.filteredSongs.push(action.payload);
    },
    deleteSong: (state, action) => {
      const id = action.payload;
      state.songs = state.songs.filter((song) => song.id !== id);
      state.filteredSongs = state.filteredSongs.filter((song) => song.id !== id);
    },
    sortAsc: (state, action) => {
      const sortkey = action.payload;
      state.filteredSongs = state.filteredSongs.sort((a, b) => a[sortkey].toLowerCase() > b[sortkey].toLowerCase() ? 1: -1 );
    },
    sortDesc: (state, action) => {
      const sortkey = action.payload;
      state.filteredSongs = state.filteredSongs.sort((a, b) => a[sortkey].toLowerCase() > b[sortkey].toLowerCase() ? -1: 1 );
    },
    sortNumAsc: (state, action) => {
      const sortkey = action.payload;
      state.filteredSongs = state.filteredSongs.sort((a, b) => a[sortkey].toLowerCase() - b[sortkey].toLowerCase() );
    },
    sortNumDesc: (state, action) => {
      const sortkey = action.payload;
      state.filteredSongs = state.filteredSongs.sort((a, b) => b[sortkey].toLowerCase() - a[sortkey].toLowerCase() );
    },
    filterBy: (state, action ) => {
      let value = action.payload.value;
      let filteredValues = state.songs.filter(song => {
        return song.genre.includes(value) ||
          song.rating.includes(value);
      });
      return {
        ...state,
        filteredSongs: filteredValues
      }
    },
  },
});

export const { addSong, deleteSong, sortAsc, sortDesc, sortNumAsc, sortNumDesc, filterBy } =
  songsSlice.actions;
export default songsSlice.reducer;
