import React from 'react'
import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faSearch  } from '@fortawesome/free-solid-svg-icons'

interface ButtonEvent{
    click?: React.MouseEventHandler<HTMLButtonElement>
}

function Button(props: ButtonEvent) {
    return (
        
        <div className="button-content">
            
         <button className="btn-search" onClick={props.click}> <FontAwesomeIcon icon={faSearch}/> </button>

        </div>
    )
}

export default Button
