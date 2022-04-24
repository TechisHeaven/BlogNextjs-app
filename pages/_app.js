import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import styles from '../styles/Navbar.module.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
