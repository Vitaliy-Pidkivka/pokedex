import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import {createKey, isEmpty} from './utils/helpers'
import usePokemonList from './hooks/usePokemonList'
import PokemonPreview from './components/PokemonPreview'
import PokemonDetails from './components/PokemonDetails'
import {makeStyles} from '@material-ui/styles'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles({
    appWrapper: {
        display: 'flex',
    },
    contentWrapper: {
        display: 'flex',
        flex: '0 1 50%',
        flexWrap: 'wrap',

    },
    pokemonList: {
        display: 'flex',
        flex: '0 1 100%',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        height: 'calc(100vh - 76px)',
        overflowY: 'scroll',
        justifyContent: 'center',
    },
    moreBtn: {
        flex: '1 0 auto',
        marginTop: 20,
        padding: 16,
        color: '#fff',
        background: '#328df6',
        margin: 10,
    }
});

const App = ({}) => {
    const classes = useStyles();
    const [pokemon, setPokemon] = useState({})
    const [filter, setFilter] = useState('')
    const {pokemonList, setNextPage} = usePokemonList()

    return (
        <div className={classes.appWrapper}>
            <div className={classes.contentWrapper}>
                <div  className={classes.pokemonList}>
                    {pokemonList.map(({name}, index) => (
                        <PokemonPreview
                            key={createKey(name, index)}
                            {...{filter, name, setFilter, setPokemon}}
                        />
                    ))}
                </div>
                <Button
                    className={classes.moreBtn}
                    color='primary'
                    variant='contained'
                    onClick={setNextPage}
                >
                    Load more
                </Button>
            </div>
            {!isEmpty(pokemon) && (
                <PokemonDetails
                    pokemon={pokemon}/>
            )}
        </div>
    )
}

export default App