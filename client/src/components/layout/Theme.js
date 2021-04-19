import { createMuiTheme } from '@material-ui/core/styles';

const vvDarkGreen = '#307c3b';
const vvLightGreen = '#9fdd56';
const vvTurquoise = '#23bad5';
const vvWhite = '#000';

export default createMuiTheme({
  palette: {
    common: {
      dkGreen: `${vvDarkGreen}`,
      ltGreen: `${vvLightGreen}`,
      turquoise: `${vvTurquoise}`,
      white: `${vvWhite}`,
    },
    primary: {
      main: `${vvDarkGreen}`,
    },
    secondary: {
      main: `${vvTurquoise}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Montserrat',
      fontSize: '1rem',
    },
    login: {
      fontFamily: 'Montserrat',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
  },
});
