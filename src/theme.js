import { createMuiTheme } from '@material-ui/core/styles';

// FONTS
import Calibri from '../src/assets/fonts/Calibri.ttf';
/* import CircularStdBlack from '../src/assets/fonts/CircularStd-Black.ttf'; */
import CircularStdBook from '../src/assets/fonts/CircularStd-Book.ttf';
/* import CircularStdMedium from '../src/assets/fonts/CircularStd-Medium.ttf'; */

/* const circularStdBlack = {
  fontFamily: 'Circular Std Black',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  src: `local(CircularStd-Black), url(${CircularStdBlack}) format(ttf)`,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}; */

const circularStd = {
  fontFamily: 'Circular Std',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  src: `local(CircularStd-Book), url(${CircularStdBook}) format(ttf)`,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

/* const circularStdMeduim = {
  fontFamily: 'Circular Std Medium',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  src: `local(CircularStd-Medium), url(${CircularStdMedium}) format(ttf)`,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}; */

const calibri = {
  fontFamily: 'Calibri',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  src: `local(Calibri), url(${Calibri}) format(ttf)`,
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
    sparkAcademyPrimary: {
      main: '#497C7A',
    },
    sparkAcademySecondary: {
      main: '#992C30',
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Circular Std',
      'Calibri',
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
        '@font-face': [circularStd, calibri],
      },
    },
  },
});
theme.typography.h1 = {
  fontSize: '3rem',
  '@media (min-width:600px)': {
    fontSize: '4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5rem',
  },
};
theme.typography.h2 = {
  fontSize: '1.3rem',
  '@media (min-width:600px)': {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};
theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.8rem',
  },
};
theme.typography.h4 = {
  fontSize: '1.1rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
};
theme.typography.h5 = {
  fontSize: '0.8rem',
  '@media (min-width:600px)': {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.1rem',
  },
};
/* theme.typography.h6 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
}; */
theme.typography.body1 = {
  fontSize: '1.2rem',
};
theme.typography.subtitle1 = {
  /*   fontFamily: 'Circular Std Book', */
  fontSize: '1rem',
};
export default theme;
