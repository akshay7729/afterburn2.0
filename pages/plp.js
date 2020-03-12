import React from 'react'
import Head from 'next/head'
import Header from '../Components/Header/Header'
import Container from 'react-bootstrap/Container'
import {Row, Col, Dropdown, Card} from 'react-bootstrap'
import {useRouter} from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import '../Styles/plp.scss'
import Link from 'next/link'

const PLP = () => {
    const router = useRouter();
    return (
        <div>
            <Head>
            <title>PLP</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header />
                <Container className="plp-options">
                    <Row>
                        <Col className="filter-icon d-flex"><FontAwesomeIcon icon={faBars} /> Filter</Col>
                        <Col className="text-center d-flex justify-content-center align-items-center">iPhones</Col>
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
                <Container className="plp-list">
                    <Row>
                        <Col md={3} className="plp-card">
                            <Link href="/">
                                <a>
                                <Card className="pt-2">
                                    <Card.Img variant="top" src="/assets/Products/xs.jpg" />
                                    <Card.Body>
                                        <Card.Title className="text-center">iPhone XS Gold</Card.Title>
                                        <div className="text-center plp-price card-text">
                                            <div className="price old-price"><FontAwesomeIcon icon={faRupeeSign} /> 69999</div>
                                            <div className="price new-price"><FontAwesomeIcon icon={faRupeeSign} /> 59999</div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                </a>
                            </Link>
                        </Col>
                        <Col md={3} className="plp-card">
                            <Link href="/">
                                <a>
                                <Card className="pt-2">
                                    <Card.Img variant="top" src="/assets/Products/xs.jpg" />
                                    <Card.Body>
                                        <Card.Title className="text-center">iPhone XS Gold</Card.Title>
                                        <div className="text-center plp-price card-text">
                                            <div className="price old-price"><FontAwesomeIcon icon={faRupeeSign} /> 69999</div>
                                            <div className="price new-price"><FontAwesomeIcon icon={faRupeeSign} /> 59999</div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                </a>
                            </Link>
                        </Col>
                        <Col md={3} className="plp-card">
                            <Link href="/">
                                <a>
                                <Card className="pt-2">
                                    <Card.Img variant="top" src="/assets/Products/xs.jpg" />
                                    <Card.Body>
                                        <Card.Title className="text-center">iPhone XS Gold</Card.Title>
                                        <div className="text-center plp-price card-text">
                                            <div className="price old-price"><FontAwesomeIcon icon={faRupeeSign} /> 69999</div>
                                            <div className="price new-price"><FontAwesomeIcon icon={faRupeeSign} /> 59999</div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                </a>
                            </Link>
                        </Col>
                        <Col md={3} className="plp-card">
                            <Link href="/">
                                <a>
                                <Card className="pt-2">
                                    <Card.Img variant="top" src="/assets/Products/xs.jpg" />
                                    <Card.Body>
                                        <Card.Title className="text-center">iPhone XS Gold</Card.Title>
                                        <div className="text-center plp-price card-text">
                                            <div className="price old-price"><FontAwesomeIcon icon={faRupeeSign} /> 69999</div>
                                            <div className="price new-price"><FontAwesomeIcon icon={faRupeeSign} /> 59999</div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                </a>
                            </Link>
                        </Col>
                        <Col md={3} className="plp-card">
                            <Link href="/">
                                <a>
                                <Card className="pt-2">
                                    <Card.Img variant="top" src="/assets/Products/xs.jpg" />
                                    <Card.Body>
                                        <Card.Title className="text-center">iPhone XS Gold</Card.Title>
                                        <div className="text-center plp-price card-text">
                                            <div className="price old-price"><FontAwesomeIcon icon={faRupeeSign} /> 69999</div>
                                            <div className="price new-price"><FontAwesomeIcon icon={faRupeeSign} /> 59999</div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                </a>
                            </Link>
                        </Col>
                        <Col md={3} className="plp-card">
                            <Link href="/">
                                <a>
                                <Card className="pt-2">
                                    <Card.Img variant="top" src="/assets/Products/xs.jpg" />
                                    <Card.Body>
                                        <Card.Title className="text-center">iPhone XS Gold</Card.Title>
                                        <div className="text-center plp-price card-text">
                                            <div className="price old-price"><FontAwesomeIcon icon={faRupeeSign} /> 69999</div>
                                            <div className="price new-price"><FontAwesomeIcon icon={faRupeeSign} /> 59999</div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                </a>
                            </Link>
                        </Col>
                        <Col md={3} className="plp-card">
                            <Link href="/">
                                <a>
                                <Card className="pt-2">
                                    <Card.Img variant="top" src="/assets/Products/xs.jpg" />
                                    <Card.Body>
                                        <Card.Title className="text-center">iPhone XS Gold</Card.Title>
                                        <div className="text-center plp-price card-text">
                                            <div className="price old-price"><FontAwesomeIcon icon={faRupeeSign} /> 69999</div>
                                            <div className="price new-price"><FontAwesomeIcon icon={faRupeeSign} /> 59999</div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                </a>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    )
}

export default PLP