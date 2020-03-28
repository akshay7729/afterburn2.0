import React from 'react'
import '../../Styles/header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Search from '../Search'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Header = () => {
    const router = useRouter();
    console.log('header router', router)
    return (
        <Navbar expand="lg">
            <Link href="/">
                <a className="text-uppercase navbar-brand">Afterburn</a>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-grow-1 header-home-links">
                    <Link href="/plp?title=iphone xs max">
                        <a className="nav-link">iphone</a>
                    </Link>

                    <Link href="/plp?title=macbook">
                        <a className="nav-link">Macbook</a>
                    </Link>
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
}

export default Header