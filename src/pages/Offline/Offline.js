import React from 'react'
import {useHistory} from 'react-router-dom'

import './Offline.scss'
import Button from '../../components/Button/Button'

function Offline() {
    const history = useHistory()
    return (
        <div className="offline">
            <p>It seems you're not connected to the internet</p>
            <div onClick={()=>{history.push('/')}} className="refresh-btn">
                <Button name="Refresh" />
            </div>
        </div>
    )
}

export default Offline
