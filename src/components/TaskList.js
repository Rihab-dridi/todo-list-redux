import React,{} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { delet,filter,filterClick,done,filterNotDoneClick,notDone} from '../redux/actions/action';
import Task from'./Task';



const TodoList=()=>{

     const todos = useSelector(state => state.todos)
     const filterr=useSelector(state=>state.filterr)
     const Done=useSelector(state=>state.Done)
     const filterNotDone=useSelector(state=>state.filterNotDone)
     const unDone = useSelector(state => state.notDone)
     const dispatch=useDispatch()
      
    const Filtarion=()=>{ 
    dispatch(filterClick())
    dispatch(done()) 
    }
    const FiltarionNotDone=()=>{ 
    dispatch(filterNotDoneClick())
    dispatch(notDone()) 
    }
    

    
     
    return (
           <div calssName="list">
            <div className="filter-btn"  >
           <button className="not-yet-btn" onClick={Filtarion}>Not yet</button>
           <button className="done-btn" onClick={FiltarionNotDone}>DONE</button>
           </div> 
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
     </ul> }

               
           </div>
   
        )}

export default TodoList;