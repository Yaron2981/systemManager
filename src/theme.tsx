import { createTheme } from '@mui/material/styles';
import { red ,deepPurple, indigo, amber, deepOrange, grey} from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

const darkPalette = {
	primary: {
		main: "#DDD",
	},
	text: {
		primary: "rgba(255, 255, 255, 0.87)",
	},
	custom: {
		main: '#FFFFFF1F',
	},
	surface: {
		main: "#202020"
	}
}

const lightPalette = {
	primary: {
		main: "#f3f4f6"
	},
	text: {
		primary: "#000",
	},
	custom: {
		main: grey[400],
	},
	surface: {
		main: "#e5e7eb"
	}
}

export const getDesignTokens = (mode: PaletteMode) => {
  return {
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          lightPalette
        }
      : {
          // palette values for dark mode
          darkPalette
        }),
  },
}
};
// A custom theme for this app
const theme = createTheme(getDesignTokens("dark"));
export default theme;
