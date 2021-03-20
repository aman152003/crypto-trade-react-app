import React,{useContext} from 'react'
import {Link} from 'react-router-dom'

import './Crypto.scss'
import {AppContext} from '../AppContext'

import Button from '../Button'
import App from '../../App'

function Crypto(props) {
    const {id,setID} = useContext(AppContext);
    return (
        <Link to='/transaction' style={{textDecoration: 'none'}}>
            <div onClick={()=>{setID(props.id)}} className="crypto">
                <div className="crypto-left">
                    <img className='left' src={props.image} alt='crypto' />
                    <p className='left symbol'>{props.symbol.toUpperCase()}</p>
                    <p className='left price'>${props.price.toLocaleString()}</p>
                </div>
                <div className="crypto-right">
                    <p className='right change' style={props.change > 0 ? {color: 'var(--Lime-Green)'} : {color: 'var(--Bright-Red)'}}>{props.change}%</p>
                    <p className='right'>${props.high.toLocaleString()}</p>
                    <p className='right'>${props.low.toLocaleString()}</p>
                    <p className='rank'>{props.rank}</p>
                    <div className='crypto-btn'>
                        <Button bgColor='var(--Light-Blue)' name='Trade'/>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Crypto
