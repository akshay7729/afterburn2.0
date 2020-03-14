import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const Facets = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);

    // debounce in price range
    const debounce = (callback,wait) => {
        let timeout = null
        return (...args) => {
            const next = () => callback(...args)
            clearTimeout(timeout)
            timeout = setTimeout(next,wait)
        }
    }

    const handleMinPrice = debounce(value => {
        value && console.log('min price', value);
        setMinPrice(value);
    },200);

    const handleMaxPrice = debounce(value => {
        value && console.log('max price', value);
        setMaxPrice(value);
    },200);

    return (
        <React.Fragment>
            <Row className="facets">
                <Col>
                    <h5 className="text-center text-uppercase">Filters</h5>
                    <hr />
                    <div>
                        <Col className="facets-cat">
                            <h6>Internal Storage</h6>
                            <div className="facets-list">
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="32 GB" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="64 GB" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="128 GB" />
                                </Form.Group>
                            </div>
                        </Col>
                        <Col className="facets-cat">
                            <h6>RAM</h6>
                            <div className="facets-list">
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="1 GB" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="2 GB" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="4 GB" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="8 GB" />
                                </Form.Group>
                            </div>
                        </Col>
                        <Col className="facets-cat">
                            <h6>Price</h6>
                            <div>
                                Min Price - {minPrice}
                            </div>
                            <div className="facets-list">
                                <input 
                                    type="range" 
                                    min="0"
                                    max={maxPrice}
                                    className="range w-100"
                                    onChange={e => handleMinPrice(e.target.value)}
                                />
                            </div>
                            <div>
                                Max Price - {maxPrice}
                            </div>
                            <div className="facets-list">
                                <input 
                                    type="range" 
                                    min={minPrice}
                                    max="100"
                                    className="range w-100"
                                    onChange={e => handleMaxPrice(e.target.value)}
                                />
                            </div>
                        </Col>
                        <Col className="facets-cat">
                            <h6>Color</h6>
                            <div className="facets-list">
                                <div className="colors-list">
                                    <div className="colors-list-swatch">
                                        <div className="color-swatch" style={{background:'#000000'}}></div>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="" />
                                        </Form.Group>
                                    </div>
                                    <div className="colors-list-swatch">
                                        <div className="color-swatch" style={{background:'red'}}></div>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="" />
                                        </Form.Group>
                                    </div>
                                    <div className="colors-list-swatch">
                                        <div className="color-swatch" style={{background:'yellow'}}></div>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="" />
                                        </Form.Group>
                                    </div>
                                    <div className="colors-list-swatch">
                                        <div className="color-swatch" style={{background:'green'}}></div>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="" />
                                        </Form.Group>
                                    </div>
                                    <div className="colors-list-swatch">
                                        <div className="color-swatch" style={{background:'violet'}}></div>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="" />
                                        </Form.Group>
                                    </div>
                                    <div className="colors-list-swatch">
                                        <div className="color-swatch" style={{background:'maroon'}}></div>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="" />
                                        </Form.Group>
                                    </div>
                                    <div className="colors-list-swatch">
                                        <div className="color-swatch" style={{background:'#000000'}}></div>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="" />
                                        </Form.Group>
                                    </div>
                                    <div className="colors-list-swatch">
                                        <div className="color-swatch" style={{background:'red'}}></div>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="" />
                                        </Form.Group>
                                    </div>
                                    <div className="colors-list-swatch">
                                        <div className="color-swatch" style={{background:'yellow'}}></div>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="" />
                                        </Form.Group>
                                    </div>
                                    <div className="colors-list-swatch">
                                        <div className="color-swatch" style={{background:'green'}}></div>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="" />
                                        </Form.Group>
                                    </div>
                                    <div className="colors-list-swatch">
                                        <div className="color-swatch" style={{background:'violet'}}></div>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="" />
                                        </Form.Group>
                                    </div>
                                    <div className="colors-list-swatch">
                                        <div className="color-swatch" style={{background:'maroon'}}></div>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="" />
                                        </Form.Group>
                                    </div>
                                    <div className="colors-list-swatch">
                                        <div className="color-swatch" style={{background:'green'}}></div>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="" />
                                        </Form.Group>
                                    </div>
                                    <div className="colors-list-swatch">
                                        <div className="color-swatch" style={{background:'violet'}}></div>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="" />
                                        </Form.Group>
                                    </div>
                                    <div className="colors-list-swatch">
                                        <div className="color-swatch" style={{background:'maroon'}}></div>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="" />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="facets-cat">
                            <h6>Screen Size</h6>
                            <div className="facets-list">
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="4.7 Inch" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="5 Inch" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="5.8 Inch" />
                                </Form.Group>
                            </div>
                        </Col>
                        
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Facets;