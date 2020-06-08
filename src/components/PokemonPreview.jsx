import React from 'react'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles';
import {green, purple, red, blue} from '@material-ui/core/colors';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {createKey} from '../utils/helpers'
import usePokemonDetails from '../hooks/usePokemonDetails'
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: '0 0 5px 10px',
    },
    cursor: {
        cursor: 'pointer',
    },
    background:{
        transition: 'all .3s ease',
        '&:hover': {
            backgroundColor: '#cadde3',
        },
    },
    height: {
        height: 63
    },
    padding: {
        padding: 5,
    }
}));



const GreenButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);
const GreenLightButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(green[300]),
        backgroundColor: green[300],
        '&:hover': {
            backgroundColor: green[500],
        },
    },
}))(Button);

const RedButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        '&:hover': {
            backgroundColor: red[700],
        },
    },
}))(Button);

const BlueButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: blue[700],
        },
    },
}))(Button);
const PurpleLightButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[300]),
        backgroundColor: purple[300],
        '&:hover': {
            backgroundColor: purple[500],
        },
    },
}))(Button);

const PokemonPreview = ({filter, name, setFilter, setPokemon}) => {

    const classes = useStyles()
    const pokemonDetails = usePokemonDetails(name)
    const {sprites = {}, types = []} = pokemonDetails
    const {front_default = ''} = sprites

    const typesList = types.map(({type}) => type.name)
    if (filter && !typesList.includes(filter)) return null

    const setPokemonDetails = () => setPokemon(pokemonDetails)

    return (

        <TableRow className={classes.background}>
            <TableCell className={classes.padding}>
                <img
                    className={`${classes.cursor} ${classes.height} `}
                    alt={name}
                    onClick={setPokemonDetails}
                    src={front_default}
                />
            </TableCell>
            <TableCell align='right'>
                <div onClick={setPokemonDetails}
                     className={`${classes.cursor} ${classes.padding}`}
                >
                    {name}
                </div>
            </TableCell>
            <TableCell align='right'
                       className={`${classes.padding}`}
            >
                {typesList.map((type, index) => {
                    if (type === 'grass') {
                        return (
                            <GreenButton
                                className={classes.margin}
                                variant='contained'
                                key={createKey(type, index)}
                                onClick={() => {
                                    const filterToSet = type === filter
                                        ? ''
                                        : type
                                    setFilter(filterToSet)
                                }}
                            >
                                {type}
                            </GreenButton>)
                    }
                    if (type === 'water') {
                        return (
                            <BlueButton
                                className={classes.margin}
                                variant='contained'
                                key={createKey(type, index)}
                                onClick={() => {
                                    const filterToSet = type === filter
                                        ? ''
                                        : type
                                    setFilter(filterToSet)
                                }}
                            >
                                {type}
                            </BlueButton>)
                    }

                    if (type === 'fire') {
                        return (
                            <RedButton
                                className={classes.margin}
                                variant='contained'
                                key={createKey(type, index)}
                                onClick={() => {
                                    const filterToSet = type === filter
                                        ? ''
                                        : type
                                    setFilter(filterToSet)
                                }}
                            >
                                {type}
                            </RedButton>)
                    }
                    if (type === 'poison') {
                        return (
                            <GreenLightButton
                                className={classes.margin}
                                variant='contained'
                                key={createKey(type, index)}
                                onClick={() => {
                                    const filterToSet = type === filter
                                        ? ''
                                        : type
                                    setFilter(filterToSet)
                                }}
                            >
                                {type}
                            </GreenLightButton>)
                    }
                    if (type === 'flying') {
                        return (
                            <PurpleLightButton
                                className={classes.margin}
                                variant='contained'
                                key={createKey(type, index)}
                                onClick={() => {
                                    const filterToSet = type === filter
                                        ? ''
                                        : type
                                    setFilter(filterToSet)
                                }}
                            >
                                {type}
                            </PurpleLightButton>)
                    }

                    return (
                        <Button
                            className={classes.margin}
                            color='primary'
                            key={createKey(type, index)}
                            onClick={() => {
                                const filterToSet = type === filter
                                    ? ''
                                    : type
                                setFilter(filterToSet)
                            }}
                            variant='contained'
                        >
                            {type}
                        </Button>
                    )
                })}
            </TableCell>
        </TableRow>
    )
}

export default PokemonPreview