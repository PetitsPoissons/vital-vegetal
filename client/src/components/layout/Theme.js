import { createMuiTheme } from '@material-ui/core/styles';

const vvDarkGreen = '#307c3b';
const vvLightGreen = '#9fdd56';
const vvTurquoise = '#23bad5';
const vvDarkBlueGrey = '#607d8b';

export default createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: 0,
      // backgroundColor: 'transparent',
      backgroundImage: 'linear-gradient(white 90%, transparent 92%)',
    },
  },
  palette: {
    common: {
      dkGreen: `${vvDarkGreen}`,
      ltGreen: `${vvLightGreen}`,
      turquoise: `${vvTurquoise}`,
      dkBlueGrey: `${vvDarkBlueGrey}`,
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
