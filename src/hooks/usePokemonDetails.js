import { useState, useEffect } from 'react'

import { fetchPokemon } from '../utils/api'

const usePokemonDetails = (url) => {
  const [pokemon, setPokemon] = useState({})

  const fetchPokemonDetails = async () => {
    const { data } = await fetchPokemon({ url })
    setPokemon(data)
  }
  useEffect(() => {
    fetchPokemonDetails()
  }, [])

  return pokemon
}

export default usePokemonDetails