import {Provider} from 'react-redux'
import ConfigureStore from '../Store'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Styles/Global.scss'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Header from '../Components/Header/Header'
import Banner1 from '../Components/Banners/Banner1'
import Banner2 from '../Components/Banners/Banner2'
import MegaNavComponent from '../Components/Header/MegaNav'

const Home = (props) => {
  console.log('props',props)
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
          <MegaNavComponent />
          <Container>
            <Banner2 />
            <Banner1 />
          </Container>
        </main>

        <footer>
        </footer>
      </div>
    </Provider>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  const data = 'Hello World';
  return { props: { data } }
}

export default Home
