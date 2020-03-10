import React from 'react'
import '../../Styles/SearchBox.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const Search = () => {

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
        value && console.log('debounced value', value);
    },500)

    return (
        <Form inline>
            <span className="searchLogo"><FontAwesomeIcon icon={faSearch} /></span>
            <FormControl 
                type="text" 
                placeholder="Search for shoes, watches and more..." 
                className="mr-sm-2"
                onKeyUp={e => handleSearchKeyUp(e.target.value)} 
            />
        </Form>
    )
}

export default Search