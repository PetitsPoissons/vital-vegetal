import { createMuiTheme } from '@material-ui/core/styles';

const vvDarkGreen = '#307c3b';
const vvLightGreen = '#9fdd56';
const vvTurquoise = '#23bad5';

export default createMuiTheme({
  palette: {
    common: {
      dkGreen: `${vvDarkGreen}`,
      ltGreen: `${vvLightGreen}`,
      turquoise: `${vvTurquoise}`,
    },
    primary: {
      main: `${vvDarkGreen}`,
    },
    secondary: {
      main: `${vvTurquoise}`,
    },
  },
});
