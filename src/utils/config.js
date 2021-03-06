export const API_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
export const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
export const BACKDROP_SIZE = 'w500';
// w92, w154, w185, w342, w500, w780, original
export const POSTER_SIZE = 'w342';

// Mine

/* 
Content berisikan antara tv, person, maupun movie
Keyword berisikan id ataupun kategori yang akan di fetching (upcoming, now airing, popular, dsb)
Details berisikan detail yang akan di fetching (fetch similar, crew dsb)
gid = genre id
*/

export const CONTENT_URL = (content, keyword, page = 1) =>
   `${API_URL}${content}/${keyword}?api_key=${API_KEY}&language=en-US&page=${page}`;

export const DETAILS_CONTENT_URL = (content, keyword, details) =>
   `${API_URL}${content}/${keyword}/${details}?api_key=${API_KEY}&language=en-US&page=1`;

export const IMAGES_CONTENT_URL = (content, id) =>
   `${API_URL}${content}/${id}/images?api_key=${API_KEY}&include_image_language=en`;

export const SEARCH_URL = (content, query, page = 1) =>
   `${API_URL}search/${content}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`;

export const DISCOVER_URL = (content, gid, page = 1) =>
   `${API_URL}discover/${content}?api_key=${API_KEY}&with_genres=${gid}&page=${page}`;

export const PEOPLE_URL = (id, details = null) =>
   `${API_URL}person/${id}${
      details ? '/' + details : ''
   }?api_key=${API_KEY}&language=en-US`;

// export const IMAGE_URL = (path, backdrops = null) =>
//    `${IMAGE_BASE_URL}${backdrops ? BACKDROP_SIZE : POSTER_SIZE}${path}`;

export const IMAGE_URL = ({ path, backdrops, original }) =>
   `${IMAGE_BASE_URL}${
      !backdrops && !original
         ? POSTER_SIZE
         : original
         ? 'original'
         : BACKDROP_SIZE
   }${path}`;

export const SEASON_URL = (id, season_num) =>
   `${API_URL}tv/${id}/season/${season_num}?api_key=${API_KEY}&language=en-US`;

// For login and voting
export const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
export const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
export const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`;
