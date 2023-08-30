import axios from 'axios';
export const ADD_ALL_POKE = "ADD_ALL_POKE";
export const ADD_TYPES = "ADD_TYPES";
export const ADD_POKE_NAME = "ADD_POKE_NAME"


export const addTypes = (types) => {
  const endpoint = "http://localhost:3001/pokemons/types";
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint)
      const { data } = response;
      return dispatch({
        type: ADD_TYPES,
        payload: data
      })
    } catch (error) {
      window.alert(error.message);
    }
  }
}

export const addPoke = (pokemon) => {
  const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint)
      const { data } = response;
      return dispatch({
        type: ADD_ALL_POKE,
        payload: data,
      })
    } catch (error) {
      window.alert(error.message)
    }
  }
}

export const addPokeName = (pokemon) => {
  return {
    type: ADD_POKE_NAME,
    payload: pokemon,
  };
};