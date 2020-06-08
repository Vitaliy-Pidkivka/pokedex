import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/styles'

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
    } ,
    infoWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid gray',
    },
});
const PokemonDetails = ({pokemon}) => {
    debugger

    const classes = useStyles()
    const {name, sprites = {}, types = [], weight, height,base_experience} = pokemon
    const {front_default = ''} = sprites
    return (
            <Card className={classes.root} variant="outlined">
                <CardContent className={classes.content}>
                    <Typography color='textSecondary'
                                className={classes.picture}
                                component='div'
                                gutterBottom>
                        <img alt={name} src={front_default}/>
                    </Typography>
                    <Typography variant='h5'
                                component='h1'
                                className={`${classes.name} ${classes.pos}`}
                    >
                        {name}
                    </Typography>
                    <Typography color='textSecondary'
                                className={classes.infoWrapper}
                    >
                        <span className={classes.boldFont}>Weight: </span><span>{weight}</span>
                    </Typography>
                    <Typography color='textSecondary'
                                className={classes.infoWrapper}
                    >
                        <span className={classes.boldFont}>Height: </span><span>{height}</span>
                    </Typography>
                    <Typography color='textSecondary'
                                className={classes.infoWrapper}
                    >
                        <span className={classes.boldFont}>Base experience: </span><span>{base_experience}</span>
                    </Typography>
                    {pokemon.stats.map(stat => {
                        return (
                            <Typography color='textSecondary'
                                        className={classes.infoWrapper}
                            >
                                <span className={classes.boldFont}>{stat.stat.name}: </span><span>{stat.base_stat}</span>
                            </Typography>
                        )
                    })}
                </CardContent>
            </Card>
    )
}

export default PokemonDetails