import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import {createKey, isEmpty} from './utils/helpers'
import usePokemonList from './hooks/usePokemonList'
import PokemonPreview from './components/PokemonPreview'
import PokemonDetails from './components/PokemonDetails'
import {makeStyles} from "@material-ui/styles";
import {Paper} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles({
    tableContainer: {
        maxHeight: 462,
    },
    table: {},
    tableHeader: {},
    moreBtn: {
        position: 'fixed',
        bottom: '15px',
        left: '50%',
        transform: 'translate(-50%, 0)'
    }
});

const App = ({}) => {
    const classes = useStyles();
    const [pokemon, setPokemon] = useState({})
    const [filter, setFilter] = useState('')
    const {pokemonList, setNextPage} = usePokemonList()

    return (
        <div>
            {!isEmpty(pokemon) && (
                <PokemonDetails pokemon={pokemon}/>
            )}
            <TableContainer component={Paper}
                            className={classes.tableContainer}
            >
                <Table className={classes.table} stickyHeader aria-label="sticky table">
                    <TableHead className={classes.tableHeader}>
                        <TableRow>
                            <TableCell>Visual</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Types-filter</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pokemonList.map(({name}, index) => (
                            <PokemonPreview
                                key={createKey(name, index)}
                                {...{filter, name, setFilter, setPokemon}}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button
                className={classes.moreBtn}
                color='primary'
                variant='contained'
                onClick={setNextPage}
            >
                Load more
            </Button>
        </div>
    )
}

export default App