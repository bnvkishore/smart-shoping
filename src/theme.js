import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
	palette: {
    primary: {
      light: '#757ce8',
      main: '#149eb4',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
		}
	}
});
theme = responsiveFontSizes(theme);

export default theme;
