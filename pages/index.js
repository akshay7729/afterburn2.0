import 'bootstrap/dist/css/bootstrap.min.css'
import '../Styles/Global.scss'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Header from '../Components/Header/Header'
import Banner1 from '../Components/Banners/Banner1'
 
const Home = () => (
  <div>
    <Head>
      <title>Afterburn</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Header />
      <Container>
        <Banner1 />
      </Container>
    </main>

    <footer>
    </footer>
  </div>
)

export default Home
