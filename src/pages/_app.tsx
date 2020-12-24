import GlobaleStyled from '../styles/globals'
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import StyledNavbar from '../components/Navbar/Navbar';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledNavbar />
      <Component {...pageProps} />
      <GlobaleStyled />
    </ThemeProvider>
  )
}

export default MyApp
