import React, { useEffect } from 'react'
import '../../Styles/megaNav.scss'
import Link from 'next/link'
import {useDispatch, useSelector} from 'react-redux'
import { MEGANAV } from '../../Redux/Constants'
import Axios from 'axios'

const MegaNavComponent = (props) => {

    const megaNavData = useSelector(state => state.megaNav);
    const megaNavDispatch = useDispatch();

    useEffect(() => {
        megaNavDispatch({type: MEGANAV.LOAD})
        Axios.get('http://demo4999203.mockable.io/octane/mega-menu')
        .then(res => {
            megaNavDispatch(
                {
                    type : MEGANAV.RESPONSE,
                    payload: res.data 
                }
            );
        })
        .catch(err => {
            megaNavDispatch(
                {
                    type: MEGANAV.ERROR,
                    payload: err.message
                }
            )
            console.log('mega menu error',err.message);
        })
    },[]);

    if(megaNavData.loading){
        return (
            <div className="text-center">...loading</div>
        )
    }else if(megaNavData.error){
        return (
            <div className="text-center">some error occured</div>
        )
    }else{
        return (
            <div className="mega-nav">
                <ul className="level-1 d-flex justify-content-center">
                    {megaNavData.meganav && megaNavData.meganav.map((menu,index) => {
                        return (
                            <li className="level-1-list" key={index}>
                                <Link href={menu.url}>
                                    <a>{menu.name}</a>
                                </Link>
                                <div className="backdrop"></div>
                                <ul className="level-2 container">
                                    { menu.level2 && menu.level2.map((cat,index) => {
                                        if(cat.type === 'list'){
                                            return (
                                                <li className="level-2-list" key={index}>
                                                    <Link href={cat.url} className="level-2-link text-uppercase font-weight-bold">
                                                    <a>{cat.title}</a>
                                                    </Link>
                                                    <div className="dash"></div>
                                                    <ul className="level-2-content">
                                                        {cat.content && cat.content.map((contents,index) => {
                                                            return (
                                                                <li className="pb-2" key={index}>
                                                                    <Link href={contents.url}>
                                                                        <a>{contents.name}</a>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </li>
                                            )
                                        }
                                    }) } 
                                </ul>
                            </li>
                        )
                    })} 
                </ul>
            </div>
        )
    }
    
}

export default MegaNavComponent