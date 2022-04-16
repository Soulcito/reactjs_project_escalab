const api_key = `d12b59850c6996b9cbe17ebf5850fa91`;
const url = `https://api.themoviedb.org/3/search/movie`;
const url2 = `https://api.themoviedb.org/3/movie`;
export const urlImage = `https://www.themoviedb.org/t/p/w220_and_h330_face`
export const posterImage = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2`


export const searchMovies = (query, language, page, include_adult,region="", year="",primary_release_year="") => `${url}?api_key=${api_key}&language=${language}&query=${query}&page=${page}&include_adult=${include_adult}&region=${region}&year=${year}&primary_release_year=${primary_release_year}`;
export const getMovieId = (id,language) => `${url2}/${id}?api_key=${api_key}&language=${language}`;

export const types = {
  movieSetActiveMovie: `[movie] Set active movie`,
  movieDeleteActiveMovie: `[movie] Delete active movie`,
  movieLoad: `[movie] Load Movies`,
  uiStartLoading: '[UI] Start loading',
  uiFinishLoading: '[UI] Finish loading',    
}


export const time_convert = (num) => { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return `${hours}h ${minutes}m`;
}