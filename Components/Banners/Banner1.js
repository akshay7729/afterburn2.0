import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Spinner from 'react-bootstrap/Spinner'
import '../../Styles/Banner.scss'
import axios from 'axios'
import Link from 'next/link'

const Banner1 = () => {
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        axios.get('/Data/BannerData1.json')
        .then(res => {
            setLoad(true);
            console.log('res',res)
            setBannerData(res.data);
        })
        .catch(error => {
            setError(true);
            console.log('err',error);
        })
    },[])

    if(load){
        return (
            <React.Fragment>
                <Row>
                    <Col className="banner1-head">
                        <h3 className="head-inner text-uppercase text-center pt-3 pb-3">
                        Featured Collections
                        </h3>
                    </Col>
                </Row>
                <Row>
                    {
                        bannerData && bannerData.map((card,index) => {
                            return (
                                <Col className="banner1-col" key={index}>
                                    <Link href={`/${card.url}`} as={card.url}>
                                        <a>
                                            <div className={`col-inner ci-${index + 1}`}>
                                                <div className="pt-3 text-uppercase">
                                                    <h4>{card.title}</h4>
                                                </div>
                                                <div className="col-inner-img">
                                                    <Image 
                                                        src={card.img} 
                                                        className="img-responsive w-100"
                                                    />
                                                </div>
                                                <div className="buy-now text-uppercase">
                                                    <button>shop</button>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </React.Fragment>
        )
    }else if(error){
        return (
            <React.Fragment>
                <Container>
                    <div className="text-center">
                    There is some error. Please refersh the page or try after some time.
                    </div>
                </Container>
            </React.Fragment>
        )
    }else{
        return (
            <React.Fragment>
                <Container>
                    <div className="text-center">
                    <Spinner animation="grow" variant="primary" />
                    <Spinner animation="grow" variant="secondary" />
                    <Spinner animation="grow" variant="success" />
                    <Spinner animation="grow" variant="danger" />
                    <Spinner animation="grow" variant="warning" />
                    <Spinner animation="grow" variant="info" />
                    <Spinner animation="grow" variant="dark" />
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default Banner1