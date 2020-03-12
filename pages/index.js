import React from 'react';
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
import Axios from 'axios'

const store = ConfigureStore();
const Home = (props) => {
  console.log('data',props);
  return (
    <Provider store={store}>
      <div>
        <Head>
          <title>Afterburn</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Header />
          <MegaNavComponent initialData = {props}/>
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

Home.getInitialProps = async function(){
  let response = await Axios.get("https://demo4999203.mockable.io/octane/mega-menu");
  const megaNavData = await response.data;
  return {
    megaNav : {
      loading: false,
      megaNav: megaNavData,
      error: null
    }
  }
}

export default Home
