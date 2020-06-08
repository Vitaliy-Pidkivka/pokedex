import { useState, useEffect } from 'react'

import { fetchPokemon } from '../utils/api'

const LIMIT = 12

const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [page, setPage] = useState(0)

  const setNextPage = () => setPage(page + 1)

  const fetchPokemonList = async () => {
    const params = {
      offset: page * LIMIT,
      limit: LIMIT,
    }
    const { data } = await fetchPokemon({ data: { params } })
    setPokemonList([...pokemonList, ...data.results])
  }

  useEffect(() => {
    fetchPokemonList()
  }, [page])

  return { pokemonList, setNextPage }
}

export default usePokemonList