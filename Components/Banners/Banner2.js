import React from 'react'
import {Carousel} from 'react-bootstrap'

const Banner2 = () => {
    return (
        <div className="banner-2">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/assets/carousel/shoes-1.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/assets/carousel/shoes-2.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/assets/carousel/shoes-3.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner2