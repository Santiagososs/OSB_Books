import React from 'react'
import './Title.css'

interface TitleProps{
    text?:string;
}


function Title(props: TitleProps) {
    return (
       
       <div className="content-title">
             <h1>{props.text}</h1>

       </div>
    )
}

export default Title
