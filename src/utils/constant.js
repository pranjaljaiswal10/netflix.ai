export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
  },
};

export const movieCategory = [
  { endpoint: "now_playing", category: "Now Playing" },
  { endpoint: "top_rated", category: "Top Rated" },
  { endpoint: "popular", category: "Popular" },
  {endpoint: "upcoming", category: "Upcoming" },
];

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "es", name: "Spanish" },
];

export const SEARCH = [
  { value: "AI", label: "AI" },
  { value: "Title", label: "Title" },
];

export const urls = (movieId) => [
  `https://api.themoviedb.org/3/movie/${movieId}`,
  `https://api.themoviedb.org/3/movie/${movieId}/credits`,
  `https://api.themoviedb.org/3/movie/${movieId}/recommendations`,
  `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
];
