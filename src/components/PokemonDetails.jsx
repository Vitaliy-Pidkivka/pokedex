import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/styles'
import PokemonStat from './PokemonStat'
import {createKey} from '../utils/helpers'

const useStyles = makeStyles({
    root: {
        flex: '1 1 30%',
        boxShadow: '0 0 10px gray',
        margin: 10,
    },
    content: {
        padding: 10
    },
    picture: {
        textAlign: 'center',
        height: '80px',
    },
    name: {
        fontSize: 24,
        fontWeight: 900,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    pos: {
        marginBottom: 14,
    },
    boldFont: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    infoWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid gray',
    },
});

const LABELS = {
    base_experience: 'Base experience',
    height: 'Height',
    typeNames: 'Type',
    totalMoves: 'Total moves',
    weight: 'Weight',
}

const PokemonDetails = ({pokemon}) => {
    const classes = useStyles()
    const {base_experience, height, name, moves = [], sprites = {}, stats, types = [], weight} = pokemon
    const {front_default = ''} = sprites
    const totalMoves = moves.length
    const typeNames = types.map(({type}) => type.name).join(', ')
    const baseInfo = {base_experience, height, totalMoves, typeNames, weight}
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.content}>
                <Typography
                    gutterBottom
                    className={classes.picture}
                    color='textSecondary'
                    component='div'
                >
                    <img alt={name} src={front_default}/>
                </Typography>
                <Typography
                    className={`${classes.name} ${classes.pos}`}
                    component='h1'
                    variant='h5'
                >
                    {name}
                </Typography>
                {Object.keys(baseInfo).map((key, index) => (
                    <PokemonStat
                        classes={classes}
                        label={LABELS[key]}
                        key={createKey(key, index)}
                        value={baseInfo[key]}
                    />
                ))}
                {stats.map(({base_stat, stat: {name}}, index) => (
                    <PokemonStat
                        classes={classes}
                        key={createKey(name, index)}
                        label={name}
                        value={base_stat}
                    />
                ))}

            </CardContent>
        </Card>
    )
}

export default PokemonDetails