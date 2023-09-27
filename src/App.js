import MainPage from './Components/MainPage';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0e0d0d',
    },
    secondary: {
      main: '#fefefe',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <MainPage/>
    </ThemeProvider>
  );
}

export default App;
