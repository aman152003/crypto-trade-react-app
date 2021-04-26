import React,{useContext} from 'react'

import './Search.scss'
import {AppContext} from '../AppContext'
import searchIcon from '../../assets/images/Search.svg'

function Search() {
    const {setSearchTerm} = useContext(AppContext);
    const onChange = (e) => {
        setSearchTerm(e.target.value);
    }
    return (
        <div className='search'>
            <input onChange={onChange} type='text' placeholder='search...' />
            <button><img src={searchIcon} /></button>
        </div>
    )
}
export default Search
