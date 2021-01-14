import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7159d1'
    },
    secondary: {
      main: '#04d361'
    },
    error: {
      main: red.A400
    },
    background: {
      default: 'red'
    }
  }
});

export default theme;
