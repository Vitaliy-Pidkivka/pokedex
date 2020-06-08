import * as materialUiColors from '@material-ui/core/colors';

const {blue, brown, green, purple, red,grey, pink, blueGrey, yellow,amber} = materialUiColors

const TYPES = {
    bug: 'bug',
    grass: 'grass',
    fire: 'fire',
    flying: 'flying',
    poison: 'poison',
    water: 'water',
    normal: 'normal',
    fighting: 'fighting',
    ground: 'ground',
    rock: 'rock',
    ghost: 'ghost',
    steel: 'steel',
    electric: 'electric',
    psychic: 'psychic',
    ice: 'ice',
    dragon: 'dragon',
    dark: 'dark',
    fairy: 'fairy',
    shadow: 'shadow',
    unknown: 'unknown',
}

export const COLORS = {
    [TYPES.bug]: {
        backgroundColor: brown[500],
        hoverBackgroundColor: brown[700]
    },
    [TYPES.grass]: {
        backgroundColor: green[500],
        hoverBackgroundColor: green[700]
    },
    [TYPES.fire]: {
        backgroundColor: red[500],
        hoverBackgroundColor: red[700]
    },
    [TYPES.flying]: {
        backgroundColor: purple[300],
        hoverBackgroundColor: purple[700]
    },
    [TYPES.poison]: {
        backgroundColor: green[300],
        hoverBackgroundColor: green[500]
    },
    [TYPES.water]: {
        backgroundColor: blue[500],
        hoverBackgroundColor: blue[700]
    },
    [TYPES.normal]: {
        backgroundColor: blue[400],
        hoverBackgroundColor: blue[600]
    },
    [TYPES.fighting]: {
        backgroundColor: grey[200],
        hoverBackgroundColor: grey[300]
    },
    [TYPES.ground]: {
        backgroundColor: brown[300],
        hoverBackgroundColor: brown[500]
    },
    [TYPES.rock]: {
        backgroundColor: pink[300],
        hoverBackgroundColor: pink[500]
    },
    [TYPES.ghost]: {
        backgroundColor: grey[200],
        hoverBackgroundColor: grey[400]
    },
    [TYPES.steel]: {
        backgroundColor: grey[600],
        hoverBackgroundColor: grey[700]
    },
    [TYPES.electric]: {
        backgroundColor: blue[100],
        hoverBackgroundColor: blue[300]
    },
    [TYPES.psychic]: {
        backgroundColor: purple[100],
        hoverBackgroundColor: purple[300]
    },
    [TYPES.ice]: {
        backgroundColor: blue[600],
        hoverBackgroundColor: purple[800]
    },
    [TYPES.dragon]: {
        backgroundColor: red[700],
        hoverBackgroundColor: red[800]
    },
    [TYPES.dark]: {
        backgroundColor: blueGrey[700],
        hoverBackgroundColor: blueGrey[800]
    },
    [TYPES.fairy]: {
        backgroundColor: yellow[700],
        hoverBackgroundColor: yellow[800]
    },
    [TYPES.shadow]: {
        backgroundColor: blueGrey[300],
        hoverBackgroundColor: blueGrey[400]
    },
    [TYPES.unknown]: {
        backgroundColor: amber[300],
        hoverBackgroundColor: amber[400]
    },

}