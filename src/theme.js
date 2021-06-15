import { createMuiTheme } from '@material-ui/core/styles';

// FONTS
import Calibri from '../src/assets/fonts/Calibri.ttf';
import CircularStdBook from '../src/assets/fonts/CircularStd-Book.ttf';

const calibri = {
  fontFamily: 'Calibri',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  src: `local(Calibri), url(${Calibri}) format(ttf)`,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const circularStdBook = {
  fontFamily: 'CircularStd-Book',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  src: `local(CircularStd-Book), url(${CircularStdBook}) format(ttf)`,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00A99D',
    },
    secondary: {
      main: '#434343',
    },
    error: {
      main: '#dc3545',
    },
    warning: {
      main: '#ffc107',
    },
    info: {
      main: '#2196f3',
    },
    background: {
      default: '#000000',
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Calibri',
      'CircularStd-Book',
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
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [calibri, circularStdBook],
      },
    },
  },
});
theme.typography.h1 = {
  fontSize: '5.5rem',
  '@media (max-width:600px)': {
    fontSize: '3.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5.8rem',
  },
};
theme.typography.h2 = {
  fontSize: '2rem',
  '@media (max-width:600px)': {
    fontSize: '1.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.2rem',
  },
};
theme.typography.h3 = {
  fontSize: '1.8rem',
  '@media (max-width:600px)': {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};
theme.typography.h4 = {
  fontSize: '1.4rem',
  '@media (max-width:600px)': {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};
theme.typography.h5 = {
  fontSize: '1.2rem',
  '@media (max-width:600px)': {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
  },
};
theme.typography.h6 = {
  fontSize: '1rem',
  '@media (max-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  },
};
theme.typography.body1 = {
  fontSize: '1.5rem',
  '@media (max-width:600px)': {
    fontSize: '1.5rem',
  },
};
theme.typography.subtitle1 = {
  fontSize: '1.3rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
};
export default theme;
