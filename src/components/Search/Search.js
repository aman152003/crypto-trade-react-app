import React,{useContext} from 'react'
import './Search.scss'

import {AppContext} from '../AppContext'

function Search() {
    const {setSearchTerm} = useContext(AppContext);
    const onChange = (e) => {
        setSearchTerm(e.target.value);
    }
    return (
        <div className='search'>
            <input onChange={onChange} type='text' placeholder='search...' />
            <button><i class="fas fa-search"></i></button>
        </div>
    )
}
export default Search
