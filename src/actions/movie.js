import { getMovieId, searchMovies, types } from "../utilities"
import { finishLoading, startLoading } from "./ui";
import Swal from "sweetalert2";


export const startLoadingMovies = (query, language, page, include_adult,region, year,primary_release_year) => {
   return async (dispatch) => {
      
      dispatch(startLoading());    

      try {        
         
        let body ={
          ok: false,
          data: []
        };

        const url = searchMovies(query, language, page, include_adult,region, year,primary_release_year)

        await fetch(url)
                .then(res => res.json())
                .then(data => {
                    body = {
                      ok: true,
                      data: data.results,
                      language
                    };
                })
                .catch(err => {
                    body = {
                      ok: false,
                      data: [],
                      language: ''
                    };
                    console.error(err);
                });
                               
        if (body.ok) {
          dispatch(loadMovies(body));
        } else {
          Swal.fire('Error', 'Contact to the administrator','error');
        }

      } catch (error) {
        Swal.fire('Error', 'Contact to the administrator','error');
        console.error(error);
      } finally {
        dispatch( finishLoading());
      }

   } 
};

export const startLoadingMovie = (id, language) => {
  return async (dispatch) => {
     
     dispatch(startLoading());    

     try {        
        
       let body ={
         ok: false,
         data: {}
       };

       const url = getMovieId(id, language)

       await fetch(url)
               .then(res => res.json())
               .then(data => {
                   body = {
                     ok: true,
                     data: data
                   };
               })
               .catch(err => {
                   body = {
                     ok: false,
                     data: {}
                   };
                   console.error(err);
               });
                              
       if (body.ok) {
         dispatch(setActiveMovie(body.data));
       } else {
         Swal.fire('Error', 'Contact to the administrator','error');
       }

     } catch (error) {
       Swal.fire('Error', 'Contact to the administrator','error');
       console.error(error);
     } finally {
       dispatch( finishLoading());
     }

  } 
};

export const setActiveMovie = (payload) => ({
  type: types.movieSetActiveMovie,
  payload
});

export const deleteActiveMovie = () => ({
  type: types.movieDeleteActiveMovie
});

export const loadMovies = (payload) => ({
  type: types.movieLoad,
  payload
})