import React from 'react'
import '../../Styles/megaNav.scss'
import Link from 'next/link'


const MegaNav = () => {
    return (
        <div className="mega-nav">
            <ul className="level-1 d-flex justify-content-center">
                <li className="level-1-list">
                    <Link href="/">
                        <a>Level 1</a>
                    </Link>
                    <div className="backdrop"></div>
                    <ul className="level-2 container">
                        <li className="level-2-list">
                            <a className="level-2-link text-uppercase font-weight-bold" href="#">Title</a>
                            <div className="dash"></div>
                            <ul className="level-2-content">
                                <li className="pb-2">
                                    <a href="/">Name</a>
                                </li>
                                <li className="pb-2">
                                    <a href="/">Name</a>
                                </li>
                                <li className="pb-2">
                                    <a href="/">Name</a>
                                </li>
                                <li className="pb-2">
                                    <a href="/">Name</a>
                                </li>
                            </ul>
                        </li> 
                        <li className="level-2-list">
                            <a className="level-2-link text-uppercase font-weight-bold" href="#">Title</a>
                            <div className="dash"></div>
                            <ul className="level-2-content">
                                <li className="pb-2">
                                    <a href="/">Name</a>
                                </li>
                                <li className="pb-2">
                                    <a href="/">Name</a>
                                </li>
                                <li className="pb-2">
                                    <a href="/">Name</a>
                                </li>
                                <li className="pb-2">
                                    <a href="/">Name</a>
                                </li>
                            </ul>
                        </li> 
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default MegaNav