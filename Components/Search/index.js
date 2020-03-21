import React, { useState } from 'react'
import '../../Styles/SearchBox.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Link from 'next/link'

const Search = () => {

    const [autoComplete, setAutoComplete] = useState(false)

    // debounce in search box
    const debounce = (callback,wait) => {
        let timeout = null
        return (...args) => {
            const next = () => callback(...args)
            clearTimeout(timeout)
            timeout = setTimeout(next,wait)
        }
    }

    const handleSearchKeyUp = debounce(value => {
        if(value){
            console.log('debounced value', value);
            setAutoComplete(true);
        }else{
            setAutoComplete(false);
        }
    },700);

    const autoCompleteFlyout = autoComplete && 
                                <div className="flyout">
                                    <ul>
                                        <li>
                                            <Link href="/"><a>
                                                <FontAwesomeIcon icon={faSearch} /> 
                                                <span className="search-prod-name">iPhone Xs</span>
                                            </a></Link>
                                        </li>
                                        <li>
                                            <Link href="/"><a>
                                                <FontAwesomeIcon icon={faSearch} /> 
                                                <span className="search-prod-name">iPhone Xs Gold</span>
                                            </a></Link>
                                        </li>
                                        <li>
                                            <Link href="/"><a>
                                                <FontAwesomeIcon icon={faSearch} /> 
                                                <span className="search-prod-name">iPhone Xs Silver</span>
                                            </a></Link>
                                        </li>
                                        <li>
                                            <Link href="/"><a>
                                                <FontAwesomeIcon icon={faSearch} /> 
                                                <span className="search-prod-name">iPhone Xs 64 GB</span>
                                            </a></Link>
                                        </li>
                                        <li>
                                            <Link href="/"><a>
                                                <FontAwesomeIcon icon={faSearch} /> 
                                                <span className="search-prod-name">iPhone Xs 256 GB</span>
                                            </a></Link>
                                        </li>
                                    </ul>
                                </div>

    return (
        <React.Fragment>
            <Form inline>
                <span className="searchLogo"><FontAwesomeIcon icon={faSearch} /></span>
                <FormControl 
                    type="text" 
                    placeholder="Search for shoes, watches and more..." 
                    className="mr-sm-2"
                    onKeyUp={e => handleSearchKeyUp(e.target.value)} 
                />
            </Form>
            <div className="autoComplete-Flyout">
                {autoCompleteFlyout}
            </div>
        </React.Fragment>
    )
}

export default Search