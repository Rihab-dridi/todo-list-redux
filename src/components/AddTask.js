import React,{useState} from 'react';
import {useDispatch } from 'react-redux'
import {add,filter} from '../redux/actions/action'


const Form=()=>{
      //get the input (the text) local state
      const[text,setText]=useState("")
      const textHandler=(e)=>{
          setText(e.target.value)  
      }
      const dispatch = useDispatch()

    
    
    const Add=()=>{
        dispatch( add({id:Math.random(), text, completed:false, edit:false}))
          setText("")
    }

    const statusHandler=(e)=>{
        dispatch (filter(e.target.value)) //for the select input 
    }

    
    return (
           <div className="myForm">
              <div className="Add-form">
              <input className="form-input"
                     type="text"
                     value={text}
                     onChange={textHandler}               //The onchange attribute fires the moment when the value of the element is changed.
                     placeholder="Let's Get this Done"
                     autoFocus
                     required
               />
               <button className="Add-btn" onClick={Add}><i className="fas fa-plus-square"></i></button>
              </div>
              <div className="filter-form">
              <select onChange={statusHandler} name="todos" className="select" >
                  <option value="All">All</option>
                  <option value="Done">Done</option>
                  <option value="toBeDone">To be done</option>
  
               </select>
              </div>
              
           </div>
   
        )}

export default Form;