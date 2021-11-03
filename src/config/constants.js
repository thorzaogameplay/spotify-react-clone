const spotifyConfig = {
  scopes: ["user-read-email", "user-read-private", "streaming"],
  authorizationURL: "https://accounts.spotify.com/authorize",
  redirectURL: `${window.location.origin}/auth`,
  webAPI: "https://api.spotify.com/v1",
  clientID: "a0e96ff9cd4448d8b609d1cd8e177e30",
};

const defaultOptions = {
  Accept: "application/json",
  "Content-Type": "application/json",
  method: "GET",
};

export const endpoints = {
  authorization: {
    url: `${spotifyConfig.authorizationURL}?client_id=${
      spotifyConfig.clientID
    }${
      spotifyConfig.scopes
        ? "&scope=" + encodeURIComponent(spotifyConfig.scopes)
        : ""
    }&redirect_uri=${encodeURIComponent(
      spotifyConfig.redirectURL
    )}&response_type=token&show_dialog=true`,
  },
  getCategories: {
    url: `${spotifyConfig.webAPI}/browse/categories?country=BR&locale=pt_BR`,
    options: defaultOptions,
  },
  getUserProfile: {
    url: `${spotifyConfig.webAPI}/me`,
    options: defaultOptions,
  },
  getCategoriesPlaylists: {
    url: (categoryId) =>
      `${spotifyConfig.webAPI}/browse/categories/${categoryId}/playlists`,
    options: defaultOptions,
  },
  getPlaylistsTracks: {
    url: (playlistId) =>
      `${spotifyConfig.webAPI}/playlists/${playlistId}/tracks`,
    options: defaultOptions,
  },
};
