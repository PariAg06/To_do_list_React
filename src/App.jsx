import React from 'react'
import './App.css'
import InputBox from './components/InputBox'
import { useState } from 'react'
import Todolist from './components/Todolist'
const App = () => {
  const [listtodo,setlisttodo]=useState([]);
  let addlist=(inputText)=>{
    if(inputText!=" "){
    setlisttodo([...listtodo,inputText]);
    }
  }
 const deletelistitem=(key)=>{
    let newlist=[...listtodo];
    newlist.splice(key,1);
    setlisttodo([...newlist])
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <InputBox addlist={addlist}></InputBox>
        <h1 className='app-heading'>TODO</h1>
        <hr />
        {listtodo.map((listitem,i)=>{
          return (
          <Todolist key={i} index={i} item={listitem} del={deletelistitem}/>
        )
        })}
      
      </div>
    </div>
  )
}

export default App
