import React from 'react'
import Typography from '@material-ui/core/Typography'

const PokemonStat = ({ classes, label, value }) => (
    <Typography
        color='textSecondary'
        className={classes.infoWrapper}
    >
        <span className={classes.boldFont}>{label}: </span>
        <span>{value}</span>
  </Typography>
)

export default PokemonStat