import { types } from "../utilities";

const initialState = {
  data: [],
  activeData: {},
  language: ''
}

export const movieReducer = (state = initialState, action) => {
  
   switch (action.type) {
     case types.movieLoad:
       return {
         ...state,
         data: action.payload.data,
         language: action.payload.language
       };
     case types.movieSetActiveMovie:
       return {
         ...state,
         activeData: action.payload
       }       
     case types.movieDeleteActiveMovie:
       return {
         ...state,
         activeData: {}
       }       
   
     default:
       return state;
   }

};

