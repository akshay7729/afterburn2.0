import React from 'react'
import Head from 'next/head' 
import Container from 'react-bootstrap/Container'
import {Row} from 'react-bootstrap'
import {Provider} from 'react-redux'
import ConfigureStore from '../../Store'
import Header from '../../Components/Header/Header'
import MegaNavComponent from '../../Components/Header/MegaNav'
import Breadcrumb from '../../Components/Breadcrumb'
import PDPComponent from '../../Components/PDP'

const store = ConfigureStore();
const PDP = () => {
    return (
        <Provider store={store}>
        <div>
            <Head>
                <title>PDP</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header />
                <MegaNavComponent />
                <Breadcrumb />
                <Container>
                    <Row>
                        <PDPComponent />
                    </Row>
                </Container>
            </main>
        </div>
        </Provider>
    )
}

export default PDP