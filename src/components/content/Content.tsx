import React from 'react'
import './Content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBook, faLink  } from '@fortawesome/free-solid-svg-icons'

interface ApiProps {
    author:string,
    title:string,
    url: string
}


function Content(props: ApiProps) {
    return (
        
        <div className="content-container">
      
               <dl>
                  <dt className="list-content"> <FontAwesomeIcon icon={faUser}/>{props.author}</dt>
                  <dt className="list-content">  <FontAwesomeIcon icon={faBook}/>{props.title}</dt>
                  <dt className="list-content">  <FontAwesomeIcon icon={faLink}/>{props.url}</dt>
               </dl>
            
        </div>
    )
}

export default Content
