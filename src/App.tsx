import React,{useState} from 'react';
import './App.css';
import Button from './components/button/Button';
import Content from './components/content/Content';
import Input from './components/input/Input';
import Title from './components/title/Title';
import api from './configs/api'


function App() {

const [numput, setNumPut] = useState('')



  async function Search(){
   await api.get(numput).then((data)=>{
      setdata(data.data.hits)
      console.log(data)
    }).catch((error)=>{
       console.log(error)
    })
  
  }

  const [data, setdata] = useState([])

  return (
    <div className="App">
       
       <div className="app-content">
        
        <div className="title-div">
          <Title text="Biblioteca OBS"/>
          <div className="input-div">
              <Input prinput={setNumPut}/>
              <Button click={Search}/>
          </div>
        </div>
            
           {data.map((runner:any, key:number)=>(

             <div className="list-div" key={key}>
             <Content author={runner.author ? runner.author:"Autor não informado."} title={runner.title ? runner.title:"Titulo não informado"} url={runner.url ? runner.url:"Url não informada"} />
                  
             </div>
           ))}
           </div>
            
      
    </div>
  );
}

export default App;
