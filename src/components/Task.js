import React,{ useState } from 'react';
import {useDispatch } from 'react-redux'
import { delet,edit,complet } from '../redux/actions/action';


const Todo=({todo})=>{
       const dispatch=useDispatch()
       
       const[editt,setEditt ] = useState(todo.edit) //just to open/close the input  
       const[text,setText]=useState('')// local state to get the input value 
       const textHandler=(e)=>{          // the actuall function for getting the input value 
       setText(e.target.value)  
           }

      const editHandler=()=>{
       dispatch(edit(todo.id,text))    //call the edit action
        setText('')           //evacuate the field 
        setEditt(false)       // close the input 
            }
       

       const complt=()=>{
          dispatch(complet(todo.id))
          }

    return (
           <div>
                
             
               <div className="todos">
                <li  className="todo"style={todo.completed ? {textDecoration:"line-through", backgroundColor:"grey"}:null}>  {todo.text} </li>
                <div className="btns">
                <button className="com-btn" onClick={complt}><i class="far fa-check-square"></i></button>
                <button className="del-btn" onClick={()=>dispatch(delet(todo.id))}><i class="fas fa-trash-alt"></i></button>
                <button className="edt-btn" onClick={()=> setEditt(true)}><i class="fas fa-edit"></i></button>
                </div>
               </div>
               <div> 
               {(editt===true)?
                <div className="edit">
                <input className="input-edit" type="text" 
                       onChange={textHandler }
                       autoFocus/>
                <button className="sav-btn" onClick={editHandler}>save</button>
                <button className="can-btn" onClick={()=> setEditt(false)}>cancel</button> 
                </div>
                : null}
                </div>
                
                

           </div>
   
        )}

export default Todo;