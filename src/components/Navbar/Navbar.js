import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'

import Search from '../Search/Search'
import Button from '../Button'
import {AppContext} from '../AppContext'
import Logo from '../../assets/images/Logo.svg'

function Navbar() {
    const {isNavToggled,setIsNavToggled} = useContext(AppContext);
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-left">
                    <Link to="/"><img src={Logo} alt="logo" /></Link>
                    <ul>
                        <li><Link style={{textDecoration: 'none',color: 'var(--White)'}} to='/'>Home</Link></li>
                        <li><Link style={{textDecoration: 'none',color: 'var(--White)'}} to="/trending">Trending</Link></li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <div className="navbar-search">
                        <Search />
                    </div>
                    <li><Link style={{textDecoration: 'none',color: 'var(--White)'}} to="/sign-in">Sign In</Link></li>
                    <Button bgColor='var(--Light-Blue)' name='Sign Up' />
                </div>
                <div onClick={()=>{setIsNavToggled(!isNavToggled)}} className='navbar-toggle'>
                    <i class="fas fa-bars"></i> 
                </div>
            </nav>
        </div>
    )
}

export default Navbar
