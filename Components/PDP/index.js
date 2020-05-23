import React from 'react';
import {Col, Row} from 'react-bootstrap'
import '../../Styles/pdp.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign, faHeart, faStar, faCircle } from '@fortawesome/free-solid-svg-icons'

const PDPComponent = () => {
    return (
        <React.Fragment>
            <Col>
                <div 
                    id="pdpIndicators" 
                    className="carousel slide pdpCarousel" 
                    data-ride="carousel"
                >
                    <Row>
                        <Col xs={3}>
                            <ol className="carousel-indicators">
                                <li data-target="#pdpIndicators" data-slide-to="0">
                                    <img src="/assets/Products/xs.jpeg" className="d-block w-100" alt="..." />  
                                </li>
                                <li data-target="#pdpIndicators" data-slide-to="1" className="active">
                                    <img src="/assets/Products/xs.jpeg" className="d-block w-100" alt="..." />
                                </li>
                                <li data-target="#pdpIndicators" data-slide-to="2">
                                    <img src="/assets/Products/xs.jpeg" className="d-block w-100" alt="..." />
                                </li>
                                <li data-target="#pdpIndicators" data-slide-to="2">
                                    <img src="/assets/Products/xs.jpeg" className="d-block w-100" alt="..." />
                                </li>
                            </ol>
                        </Col>
                        <Col xs={9}>
                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <img src="/assets/Products/xs.jpeg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item active">
                                    <img src="/assets/Products/xs.jpeg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="/assets/Products/xs.jpeg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="/assets/Products/xs.jpeg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col className="product-layout-details">
                <h5 className="brand">Apple</h5>
                <div className="brand-line"></div>
                <div className="pdp-details">
                    <span className="bold">iPhone Xs</span> 
                    (
                        <span className="pl-2">64GB</span>
                        <span className="comma pr-2">,</span>
                        <span className="pr-2">Gold</span>
                    )
                    
                </div>
                <div className="pdp-price">
                    <span className="new-price"><FontAwesomeIcon icon={faRupeeSign} /> 52,999</span>
                    <span className="old-price pl-3 pr-3"><FontAwesomeIcon icon={faRupeeSign} /> 59,999</span>
                    <span className="offer">30% Off</span>
                </div>
                <div className="pdp-variants">
                    <div className="variant-heading"><h5 className="pr-2">colors :</h5></div>
                    <div className="variant">
                        <img className="w-100" src="../assets/Products/xs.jpeg" />
                    </div>
                    <div className="variant">
                        <img className="w-100" src="../assets/Products/xs.jpeg" />
                    </div>
                    <div className="variant">
                        <img className="w-100" src="../assets/Products/xs.jpeg" />
                    </div>
                </div>
                <div className="pdp-variants">
                    <div className="variant-heading"><h5 className="pr-2">size :</h5></div>
                    <div className="variant">64 GB</div>
                    <div className="variant">128 GB</div>
                    <div className="variant">512 GB</div>
                </div>
            </Col>
        </React.Fragment>
    )
} 

export default PDPComponent