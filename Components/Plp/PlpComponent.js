import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import {Row, Col, Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign, faHeart, faStar, faCircle } from '@fortawesome/free-solid-svg-icons'
import '../../Styles/plp.scss'
import Link from 'next/link'
import {useSelector, useDispatch} from 'react-redux'
import {PLP} from '../../Redux/Constants'
import {useRouter} from 'next/router'


const PLPComponent = () => {

    const plpSelector = useSelector(state => state.plp);
    const plpDispatcher = useDispatch();
    const router = useRouter();

    useEffect(() => {
        plpDispatcher({type: PLP.LOAD})
    },[])

    if(plpSelector.plp.products){
        const getFinalProducts = plpSelector.plp.products.filter(prod => {
            return prod && prod.title.toLowerCase().includes(router.query.title.toLowerCase())
        })

        var populatePLP = getFinalProducts && getFinalProducts.map((product,index) => {
            return(
                    <Col xs={12} className="plp-prod" key={index}>
                        <Link href="/">
                        <a>
                        <Card>
                            <Row>
                                <Col md={3} className="prod-image">
                                    <Card.Img 
                                        width="100%" 
                                        src={product.imageLink}
                                        alt="Card image cap"
                                        className="plp-prod-img w-100"
                                    />
                                </Col>
                                <Col xs={9}>
                                    <Card.Body className="w-100">
                                        <Card.Title className="d-flex">
                                            <div className="w-100">{product.title}</div>
                                            <div className="w-100 add-to-wishlist">
                                                <FontAwesomeIcon icon={faHeart} />
                                            </div>
                                        </Card.Title>
                                        <div className="d-flex">
                                            <div className="w-100">
                                                <ul className="prod-desc-list">
                                                    {
                                                        product.bulletPoints.map((list,index) => {
                                                            return(
                                                                <li key={index}> 
                                                                    <FontAwesomeIcon icon={faCircle} /> <span className="pl-2">{list}</span>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                            <div className="w-100">
                                                <div className="text-center prod-price-sec">
                                                    <div className="prod-price-current price-old">
                                                        <FontAwesomeIcon icon={faRupeeSign} /> 
                                                        <span className="pl-1 price-oldPrice">{product.price.value}</span>
                                                        <span className="pl-1 price-discount">{`${product.offers.baseDiscount} %off`}</span>
                                                    </div>
                                                    <div className="prod-price-current price-new">
                                                        <FontAwesomeIcon icon={faRupeeSign} /> 
                                                        <span className="pl-1">{
                                                            (
                                                                parseFloat((product.price.value)).toFixed(2) - 
                                                                (parseFloat(product.price.value) * parseFloat(product.offers.baseDiscount)/100).toFixed(2)
                                                            )
                                                        }</span>
                                                    </div>
                                                </div>
                                                <div className="text-center prod-price-emi">
                                                    <h6 className="text-uppercase">No Cost EMI</h6>
                                                </div>
                                                <div className="prod-reviews text-center">
                                                <FontAwesomeIcon icon={faStar} /> 
                                                    <span> 4.5/5 (203 reviews)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                        </a>
                    </Link>        
                </Col>
            )
        })
    }

    return (
        <Container className="plp-list">
            <Row>
                {populatePLP ? populatePLP : <div>Sorry! No results Found</div>}
            </Row>
        </Container>
    )
}

export default PLPComponent