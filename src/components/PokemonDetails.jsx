import React from 'react'
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        width: 300,
        margin: '15px auto 15px',
        boxShadow: '0 0 10px gray',

    },
    content: {
        padding: 10
    },
    picture: {
        textAlign: 'center',
        height: '80px'
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
    } ,
    infoWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid gray',
    },
});
const PokemonDetails = ({pokemon}) => {
    const classes = useStyles()
    const {name, sprites = {}, types = [], weight, height,base_experience} = pokemon
    const {front_default = ''} = sprites
    return (
        <div>
            <Card className={classes.root} variant="outlined">
                <CardContent className={classes.content}>
                    <Typography color="textSecondary"
                                className={classes.picture}
                                component='div'
                                gutterBottom>
                        <img alt={name} src={front_default}/>
                    </Typography>
                    <Typography variant="h5"
                                component="h1"
                                className={`${classes.name} ${classes.pos}`}
                    >
                        {name}
                    </Typography>
                    <Typography color="textSecondary"
                                className={classes.infoWrapper}
                    >
                        <span className={classes.boldFont}>Weight: </span><span>{weight}</span>
                    </Typography>
                    <Typography color="textSecondary"
                                className={classes.infoWrapper}
                    >
                        <span className={classes.boldFont}>Height: </span><span>{height}</span>
                    </Typography>
                    <Typography color="textSecondary"
                                className={classes.infoWrapper}
                    >
                        <span className={classes.boldFont}>Base experience: </span><span>{base_experience}</span>
                    </Typography>
                </CardContent>
            </Card>
        </div>

    )
}

export default PokemonDetails