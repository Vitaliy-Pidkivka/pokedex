import axios from 'axios'

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon'

export const fetchPokemon = ({ data, url = '/' }) => axios.get(url, data)