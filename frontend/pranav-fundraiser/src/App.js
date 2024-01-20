import CreateFundraiser from './components/CreateFundraiser/CreateFundraiser';
import './App.css';
import Fundraiser from './components/Fundraiser/Fundraiser'; 
import Routes from './routes/index'
import { ThemeProvider } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
/**
 * Renders the main application component.
 * @returns {JSX.Element} The rendered App component.
*/

import { createTheme, alpha, getContrastRatio } from '@material-ui/core/styles';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import { AuthProvider } from './context/auth';
import FooterLite from './components/Common/FooterLite';
import NavbarLite from './components/Common/NavbarLite';

const violetBase = '#648463';
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
  palette: {
    primary: {
      main: violetBase,
      light: violetBase,
      dark: alpha(violetBase, 0.9),
      contrastText: getContrastRatio(violetMain, '#fff') > 1.5 ? '#fff' : '#111',
    },
    secondary:{
      main:'#121212',
      light:'#121212',
      dark:'#121212',
      contrastText: getContrastRatio(violetMain, '#fff') > 1.5 ? '#fff' : '#111',
    },
    white:{
      main:'#fff',
      light:'#fff',
      dark:'#fff',
      contrastText: getContrastRatio('#000', '#fff') > 1.5 ? '#fff' : '#111',
    
    }
  },
});

function App() {
  return (
    <AuthProvider>
    <ThemeProvider  theme={theme}>
    <div className="App">
      <Navbar />
      <Routes />
      <Footer />
    </div>
    </ThemeProvider>
    </AuthProvider>
  );
}

function AppLite() {
  return (
    <ThemeProvider  theme={theme}>
    <div className="App">
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={true}
stacked={true}
closeOnClick
/>
      <NavbarLite />
      <Fundraiser />
      <FooterLite />
    </div>
    </ThemeProvider>
  );
}


export default AppLite;
