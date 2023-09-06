import {
  ADD_ALL_POKE,
  ADD_POKE_NAME,
  ADD_TYPES,
  SET_PAGE,
  ORDER,
  ORDER_ATTACK,
  FILTER,
} from "./actions";

const initialState = {
  allPokemons: [],
  allTypes: [],
  currentPage: 1,
  pokemonsPerPage: 12,
  pokeFilter:[],
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

    case ORDER:
      const allPokemonsOrder = [...state.allPokemons];
      if (action.payload === "A") {
        allPokemonsOrder.sort((a, b) => {
          // Compara los nombres de los Pokémon en orden ascendente
          return a.nombre.localeCompare(b.nombre);
        });
      } else if (action.payload === "D") {
        allPokemonsOrder.sort((a, b) => {
          // Compara los nombres de los Pokémon en orden descendente
          return b.nombre.localeCompare(a.nombre);
        });
      }
      return { ...state, allPokemons: allPokemonsOrder };

    case ORDER_ATTACK:
      const allPokemonsAttack = [...state.allPokemons];
      if (action.payload === "A") {
        allPokemonsAttack.sort((a, b) => a.ataque - b.ataque);
      } else if (action.payload === "D") {
        allPokemonsAttack.sort((a, b) => b.ataque - a.ataque);
      }
      return { ...state, allPokemons: allPokemonsAttack };

    case FILTER:
      if (action.payload === "All") {
        return { ...state, pokeFilter: state.allPokemons };
      } else {
        const allPokeFilter = state.allPokemons.filter(
          (poke) => 
        poke.tipos.find((tipo) => tipo === action.payload)
        );
        return { ...state, pokeFilter: allPokeFilter };
      }

    default:
      return { ...state };
  }
};

export default rootReducer;
