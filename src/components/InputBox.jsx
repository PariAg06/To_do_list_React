import React from 'react'
import { useState } from 'react'

const InputBox = (props) => {
    const [InputText,setInputText]=useState('');
    const setInput=(e)=>{
setInputText(e.target.value);
    }
  return (
  <div className="input-container">
    <input 
    type="text" 
    className='input-box-todo'
    placeholder='Enter your todo'  onChange={setInput}
    value={InputText}/>
    <button className='add-btn' onClick={()=>{
        props.addlist(InputText);
        setInputText(" ");
    }}>+</button>
    
  </div>
  )
}

export default InputBox
