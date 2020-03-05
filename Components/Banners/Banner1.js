import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import '../../Styles/Banner.scss'

const Banner1 = () => (
    <React.Fragment>
        <Row>
            <Col className="banner1-head">
                <h3 
                    className="head-inner text-uppercase text-center pt-3 pb-3">
                Featured Collections
                </h3>
            </Col>
        </Row>
        <Row>
            <Col className="banner1-col">
                <div className="col-inner ci-1">
                    <div className="pt-3 text-uppercase">
                        <h4>Shoes</h4>
                    </div>
                    <div className="col-inner-img">
                        <Image 
                            src="assets/nike-shoes-2.png" 
                            className="img-responsive w-100"
                        />
                    </div>
                    <div className="buy-now text-uppercase">
                        <button>shop</button>
                    </div>
                </div>
            </Col>

            <Col className="banner1-col">
                <div className="col-inner ci-2">
                    <div className="pt-3 text-uppercase">
                        <h4>bags</h4>
                    </div>
                    <div className="col-inner-img">
                    <Image 
                        src="assets/bag-1.png" 
                        className="img-responsive w-100"
                    />
                    </div>
                    <div className="buy-now text-uppercase">
                        <button>shop</button>
                    </div>
                </div>
            </Col>
            <Col className="banner1-col">
                <div className="col-inner ci-3">
                    <div className="pt-3 text-uppercase">
                        <h4>Watches</h4>
                    </div>
                    <div className="col-inner-img">
                    <Image 
                        src="assets/watch-1.png" 
                        className="img-responsive w-100"
                    />
                    </div>
                    <div className="buy-now text-uppercase">
                        <button>shop</button>
                    </div>
                </div>
            </Col>
        </Row>
    </React.Fragment>
)

export default Banner1