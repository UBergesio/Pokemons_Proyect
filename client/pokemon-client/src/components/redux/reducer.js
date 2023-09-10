import {
  ADD_ALL_POKE,
  ADD_POKE_NAME,
  ADD_TYPES,
  SET_PAGE,
  ORDER,
  ORDER_ATTACK,
  FILTER,
  CREATE_POKE,
  FILTER_DB,
} from "./actions";

const initialState = {
  allPokemons: [],
  allTypes: [],
  currentPage: 1,
  pokemonsPerPage: 12,
  pokeFilter: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POKE:
      return {
        ...state,
        allPokemons: [action.payload, ...state.allPokemons],
        pokeFilter: [action.payload, ...state.allPokemons]
      }

    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case ADD_POKE_NAME:
      return {
        ...state,
        allPokemons: [action.payload, ...state.allPokemons],
        pokeFilter: [action.payload, ...state.allPokemons],
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
        pokeFilter: action.payload,
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
      return { ...state, pokeFilter: allPokemonsOrder };

    case ORDER_ATTACK:
      const allPokemonsAttack = [...state.pokeFilter];
      if (action.payload === "A") {
        allPokemonsAttack.sort((a, b) => a.ataque - b.ataque);
      } else if (action.payload === "D") {
        allPokemonsAttack.sort((a, b) => b.ataque - a.ataque);
      }
      return { ...state, pokeFilter: allPokemonsAttack };

    case FILTER:
      if (action.payload === "All") {
        return { ...state, pokeFilter: state.allPokemons };
      } else {
        const allPokeFilter = state.allPokemons.filter((poke) =>
          poke.tipos.find((tipo) => tipo === Number(action.payload))
        );
        if(allPokeFilter.length === 0){
          window.alert("No hay pokemons con ese tipo actualmente")
        return { ...state, pokeFilter: [...state.allPokemons] };
        }
        return { ...state, pokeFilter: allPokeFilter };
      }

    case FILTER_DB:
      if (action.payload === "A") {
        return {...state, pokeFilter: state.allPokemons}
      } else if (action.payload === "B") {
        const pokeApi = state.allPokemons.filter(
          (poke)=> poke.id < parseInt(808)
        )
        return {...state, pokeFilter: pokeApi}
      } else if (action.payload === "C") {
        const pokeDB = state.allPokemons.filter(
          (poke) => poke.id >= parseInt(808)
        )
        if (pokeDB.length === 0) {
          window.alert("Aun no creaste Pokemons")
        return { ...state, pokeFilter: [...state.allPokemons] };
        }
        return {...state, pokeFilter: pokeDB}
      }

    // eslint-disable-next-line no-fallthrough
    default:
      return { ...state };
  }
};

export default rootReducer;
