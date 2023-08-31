import { ADD_ALL_POKE, ADD_POKE_NAME, ADD_TYPES, SET_PAGE } from "./actions";

const initialState = {
  allPokemons: [],
  allTypes: [],
  currentPage: 1,
  pokemonsPerPage: 12,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case ADD_POKE_NAME:
      return {
        ...state,
        allPokemons: [action.payload, ...state.allPokemons],
      };

    case ADD_TYPES:
      return {
        ...state,
        allTypes: action.payload,
      };

    case ADD_ALL_POKE:
      return {
        ...state,
        allPokemons: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
