import React from 'react'
import {createKey} from '../utils/helpers'
import usePokemonDetails from '../hooks/usePokemonDetails'
import {makeStyles} from '@material-ui/styles'
import PokemonTypeButton from "./PokemonTypeButton";

const useStyles = makeStyles( {
    pokemon: {
        flex: '1 1 33.333%',
        boxSizing: 'border-box',
        padding: 10,
    },
    pokemonInner: {
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 0 10px gray'
    },
    picture: {
        cursor: 'pointer',
    },
    name: {
        fontSize: 16,
        fontWeight: 900,
        textTransform: 'capitalize',
        cursor: 'pointer',
        marginBottom: 10,
    },
    margin: {
        margin: '0 5px 5px 0',
    },
});

const PokemonPreview = ({filter, name, setFilter, setPokemon}) => {

    const classes = useStyles()
    const pokemonDetails = usePokemonDetails(name)
    const {sprites = {}, types = []} = pokemonDetails
    const {front_default = ''} = sprites

    const typesList = types.map(({type}) => type.name)
    if (filter && !typesList.includes(filter)) return null

    const setPokemonDetails = () => setPokemon(pokemonDetails)
    return (
        <div className={classes.pokemon}>
            <div className={classes.pokemonInner}>
                <img
                    className={classes.picture}
                    alt={name}
                    onClick={setPokemonDetails}
                    src={front_default}
                />
                <div onClick={setPokemonDetails}
                     className={classes.name}
                >
                    {name}
                </div>
                <div>
                    {typesList.map((type, index) => (
                        <PokemonTypeButton
                            className={classes.margin}
                            variant='contained'
                            key={createKey(type, index)}
                            type={type}
                            onClick={() => {
                                const filterToSet = type === filter
                                    ? ''
                                    : type
                                setFilter(filterToSet)
                            }}
                        >
                            {type}
                        </PokemonTypeButton>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default PokemonPreview