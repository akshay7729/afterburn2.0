import React, { useState, useEffect } from 'react'
import Head from 'next/head' 
import Header from '../../Components/Header/Header'
import Container from 'react-bootstrap/Container'
import {Row, Col, Dropdown} from 'react-bootstrap'
import {useRouter} from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../../Styles/plp.scss'
import Facets from '../../Components/Facets'
import {Provider} from 'react-redux'
import ConfigureStore from '../../Store'
import MegaNavComponent from '../../Components/Header/MegaNav'
import PlpComponent from '../../Components/Plp/PlpComponent'

const store = ConfigureStore();
const PLP = () => {
    const router = useRouter();
    const [sideNav, setSideNav] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    const handleSideNav = () => {
      setSideNav(!sideNav);
      setBackdrop(true)
    };
    const handleBackdrop = () => {
      setSideNav(!sideNav)
      setBackdrop(false)
    };

    console.log('router plp index',router);
    return (
        <Provider store={store}>
        <div>
            <Head>
            <title>PLP</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header />
                <MegaNavComponent />
                <div className={`sideNav ${sideNav && `show`}`}>
                  <Facets />
                  <div className={`backdrop ${backdrop && `d-block`}`} onClick={handleBackdrop}></div>
                </div>
                <Container className="plp-options">
                    <Row>
                        <Col className="filter-icon d-flex">
                          <div 
                            onClick={handleSideNav} 
                            className="d-flex align-items-center"
                          ><FontAwesomeIcon icon={faBars} /> Filter</div>
                        </Col>
                        <Col className="text-center d-flex justify-content-center align-items-center text-uppercase plp-product-title">
                          {router.query.title}
                        </Col>
                        <Col className="text-right sortby">
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">Sort By</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Relavance</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Low to High</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">High to Low</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </Col>
                    </Row>
                </Container>
                <PlpComponent />
            </main>
        </div>
        </Provider>
    )
}

export default PLP