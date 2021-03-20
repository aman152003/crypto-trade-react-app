import React from 'react'
import './Button.scss'

function Button({name,bgColor}) {
    return (
        <div className='button'>
            <button style={{backgroundColor: `${bgColor}` }}>{name}</button>
        </div>
    )
}

export default Button
