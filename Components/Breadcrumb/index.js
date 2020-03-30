import React from 'react'
import Container from 'react-bootstrap/Container'
import {Row, Col} from 'react-bootstrap'
import {useRouter} from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const BreadcrumbComponent = () => {
    const router = useRouter();
    const path = router.route.split('/');
    console.log('path', path);
    return (
        <Container>
            <Row>
                <Col>
                    <ul className="breadcrumb">
                        <li>
                            <Link href="/"><a><FontAwesomeIcon icon={faHome} /> Home</a></Link>
                            <span className="slash"> / </span>
                        </li>
                        <li>{
                            path.map((pt, index) => {
                                if(index !== 0){
                                    return (
                                        <div key={index}>
                                            <Link href="/"><a>{pt}</a></Link>
                                            <span className="slash"> / </span>
                                        </div>
                                    )
                                }
                            })
                        }</li>
                        <li className="active">{router.query.title}</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default BreadcrumbComponent