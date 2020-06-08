import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { COLORS } from '../constants/general'

const PokemonTypeButton = ({ type, ...props }) => {
    const { backgroundColor, hoverBackgroundColor } = COLORS[type] || {}
    const withTheme = withStyles(({ palette }) => ({
        root: {
            backgroundColor,
            color: palette.getContrastText(backgroundColor),
            '&:hover': {
              backgroundColor: hoverBackgroundColor,
            },
        },
    }))
    const StyledButton =  withTheme(Button)

    return (
       <StyledButton {...props} />
    )
}

export default PokemonTypeButton