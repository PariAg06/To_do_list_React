import React from 'react'

const Todolist = (props) => {

  return (
 
    <li className='list-item'>
        {props.item}
        <span className='icons'>
            <i className="fa-solid fa-trash icon-delete" onClick={e=>{
               props.del(props.index)
            }}></i>
            </span>
    </li>
      
   
  )
}

export default Todolist
