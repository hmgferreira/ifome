import {createTheme} from '@mui/material'
import { red, yellow } from '@mui/material/colors'

export const ThemeDefault = createTheme({
    palette: {
        primary: {
            main: red[700],
            dark: red[800],
            light: red[500],
            contrastText: '#fff'
        },
        secondary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#fff'
        },
        background: {
            default: '#f8f9fa',
            paper: '#fff',
        }
    }
})