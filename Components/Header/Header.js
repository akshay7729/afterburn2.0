import React from 'react'
import '../../Styles/header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Search from '../Search'

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
                <Search />
            </Nav>
            <Nav className="header-right-nav">
                <Nav.Link href="#link">
                    <div>
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