import { ADD_ALL_POKE, ADD_TYPES } from "./actions";

const initialState = {
  allPokemons: [],
  allTypes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TYPES:
      return {
        ...state,
        allTypes: action.payload
      }

    case ADD_ALL_POKE:
      return {
        ...state,
        allPokemons: action.payload
      };
    
    
      default:
         return { ...state };
  };
}

export default rootReducer