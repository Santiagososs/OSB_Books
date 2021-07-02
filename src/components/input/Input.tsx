import React from 'react'
import './Input.css'

interface InputValor{
    prinput: React.Dispatch<React.SetStateAction<string>>
}

function Input(props: InputValor) {
    return (
       
       <div className="content-input">
            
            <input className="input-area" id="inp-value" placeholder="Busque seu autor ou livro"
             onChange={(numerinput:React.FormEvent<HTMLInputElement>)=>props.prinput(numerinput.currentTarget.value)}
            />

       </div>
    )
}

export default Input
