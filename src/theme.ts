import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
    },
    secondary: {
      main: '#8892b0',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export { theme }; 