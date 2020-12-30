import GlobaleStyled from '../styles/globals'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobaleStyled />
    </>
  )
}

export default MyApp
