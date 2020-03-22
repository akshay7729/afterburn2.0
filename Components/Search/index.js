import React, { useState, useEffect } from 'react'
import '../../Styles/SearchBox.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Link from 'next/link'
import {useSelector, useDispatch} from 'react-redux'
import {SEARCH} from '../../Redux/Constants'

const Search = () => {

    const [autoComplete, setAutoComplete] = useState(false);
    const [debounceQuery, setDebounceQuery] = useState('');
    const searchApiData = useSelector(state => state.search)
    const searchApiDispatch = useDispatch();

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
        if(value && value.length > 3){
            console.log('debounced value', value);
            setDebounceQuery(value);
            setAutoComplete(true);
            !searchApiData.search.length && searchApiDispatch({type: SEARCH.LOAD});
        }else{
            setAutoComplete(false);
        }
    },700);

    if(searchApiData.search.length){
        const autoCompleteResults = searchApiData.search.filter(data => {
            return (
                data.name.toLowerCase().includes(debounceQuery.toLowerCase()) || 
                data.query.toLowerCase().includes(debounceQuery.toLowerCase())
            ) && data;
        });
        console.log('autoCompleteResults',autoCompleteResults);

        var autoCompleteFlyout = autoComplete && (autoCompleteResults.length ? <div className="flyout">
                                <ul>
                                    {
                                        autoCompleteResults.map((search, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link href="/"><a>
                                                        <FontAwesomeIcon icon={faSearch} /> 
                                                        <span className="search-prod-name">{search.name}</span>
                                                    </a></Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div> : <div className="flyout">
                                <ul>
                                    <li>no search results found</li>
                                </ul>
                            </div>)
    }

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