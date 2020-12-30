import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import {add} from '../redux/actions/action'


const Form=()=>{
      //get the input (the text)
      const[text,setText]=useState("")
      const textHandler=(e)=>{
          setText(e.target.value)  
      }

      //get the state from the store 
      const todos = useSelector(state => state.todos)
      //get the dispathch function
      const dispatch = useDispatch()

    
    
    const Add=()=>{
        dispatch( add({id:Math.random(), text, completed:false, edit:false}))
          setText("")
    }

    
    return (
           <div className="myForm">
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
   
        )}

export default Form;