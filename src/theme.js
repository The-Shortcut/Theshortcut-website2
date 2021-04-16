import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    typography: {
       // Use the system font instead of the default Roboto font.
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  palette: {
    primary: {
      main: '#ffa100',
    },
    secondary: {
        main: '#252623',
    },
    error: {
      main: '#ef5350',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;