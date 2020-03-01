import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Header = () => (
    <Navbar expand="lg">
        <Navbar.Brand 
            href="#home"
            className="text-uppercase"
        >Afterburn
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-grow-1 header-home-links">
                <Nav.Link href="#home">Watches</Nav.Link>
                <Nav.Link href="#link">Shoes</Nav.Link>
            </Nav>
            <Nav className="flex-grow-1 search-box">
                <Form inline>
                    <span className="searchLogo"><FontAwesomeIcon icon={faSearch} /></span>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    {/* <Button variant="outline-success">Search</Button> */}
                </Form>
            </Nav>
            <Nav className="header-right-nav">
                <Nav.Link href="#link">
                    <div>
                        <span className="icon-bubbles">5</span>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div>Profile</div>
                </Nav.Link>
                <Nav.Link href="#link">
                    <div>
                        <span className="icon-bubbles">5</span>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div>Wishlist</div>
                </Nav.Link>
                <Nav.Link href="#link">
                    <div>
                        <span className="icon-bubbles">5</span>
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </div>
                    <div>Bag</div>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header