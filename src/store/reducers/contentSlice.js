import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    categoriesItems: [],
    playlists: [],
    tracks: [],
    currentTrack: "",
    nextURL: "",
    hrefURL: "",
  },
  reducers: {
    saveCategories: (state, { payload }) => {
      state.categoriesItems = [...payload.items];
      state.nextURL = payload.next;
      state.hrefURL = payload.href;
    },
    savePlaylists: (state, { payload }) => {
      state.playlists = payload;
    },
    saveTracks: (state, { payload }) => {
      state.tracks = payload;
    },
    setCurrentTrack: (state, { payload }) => {
      console.log(payload);
      state.currentTrack = payload;
    },
  },
});

export const { saveCategories, savePlaylists, saveTracks, setCurrentTrack } =
  contentSlice.actions;

export default contentSlice.reducer;
