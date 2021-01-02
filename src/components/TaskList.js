import React,{ useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import {filterHandler} from '../redux/actions/action';
import Task from'./Task';



const TodoList=()=>{
      const dispatch=useDispatch()
      const todos = useSelector(state => state.todos)
      const filtredTodos=useSelector(state=>state.filtredTodos) 
      const filtereType=useSelector(state=>state.filter) //the select button value

      useEffect(()=>{
            dispatch(filterHandler())
      },[filtereType,todos])  //so we update the filered todos each time we update the todos or the filter type





//      const filterr=useSelector(state=>state.filterr)
//       const Done=useSelector(state=>state.Done)
//       const filterNotDone=useSelector(state=>state.filterNotDone)
//       const unDone = useSelector(state => state.notDone)
     
      
//      const Filtarion=()=>{ 
//      dispatch(filterClick())
//      dispatch(done()) 
//      }
//      const FiltarionNotDone=()=>{ 
//      dispatch(filterNotDoneClick())
//      dispatch(notDone()) 
//        
    
   



    return (
           <div calssName="list">
      
           
           <ul className="todo-list">
                 {filtredTodos.map((el)=>(
                 <Task key={el.id} todo={el}  />
                   ) ) }
                  
             </ul>







              {/* <div className="filter-btn"  >
           <button className="not-yet-btn" onClick={Filtarion}>{filterr?  "All": "unDone"}</button>
           <button className="done-btn" onClick={FiltarionNotDone}>{filterNotDone?  "All": "Done"}</button>
           </div>  */}
          
{/* 
           {filterr ? <ul className="todo-list">
                 {Done.map((el)=>(
                 <Task key={el.id} todo={el}  />
                   ) ) }
                  
             </ul> :
             filterNotDone?
           <ul className="todo-list">
              {unDone.map((el)=>(
             <Task key={el.id} todo={el}  />
             ) ) }    
       </ul>:
      
         <ul className="todo-list">
         {todos.map((el)=>(
         <Task key={el.id} todo={el}  />
           ) ) }    
     </ul> } */}

               
           </div>
   
        )}

export default TodoList;