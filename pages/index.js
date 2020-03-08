import {Provider} from 'react-redux'
import ConfigureStore from '../Store'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Styles/Global.scss'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Header from '../Components/Header/Header'
import Banner1 from '../Components/Banners/Banner1'
import MegaNav from '../Components/Header/MegaNav'
const Home = () => {
  const store = ConfigureStore();
  return (
    <Provider store={store}>
      <div>
        <Head>
          <title>Afterburn</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Header />
          <MegaNav />
          <Container>
            <Banner1 />
          </Container>
        </main>

        <footer>
        </footer>
      </div>
    </Provider>
  )
}

export default Home
