

const initialState = {
    todos: [],
    filter:"All",
    filtredTodos: []
   
   
    //  Done:[],
    //  notDone:[],
    //  filterr:false,
    //  filterNotDone:false
  }
  
 
  export  const todoReducer=(state = initialState, action)=> {
    
    
    switch (action.type) {
        case "ADD":
           return {...state,todos:[...state.todos,action.payload]}
        case "DELET":
           return {...state, todos: state.todos.filter(el=> el.id !== action.payload)}
        case  "EDIT":
          return {...state,
                     todos:state.todos.map(el=> el.id=== action.payload.ID? {...el,text: action.payload.textEdited}:el )} 
        case  "COMPLET": 
          return {...state,
                     todos: state.todos.map(el=>el.id===action.payload? {...el,completed:!el.completed}:el )}  
        
        case "FILTER": 
        return {
          ...state,
          filter:action.payload.status
                }
        
        case "FILTREDTODOS":
          return{
            ...state,
            filtredTodos: state.filter==="Done"? state.todos.filter(el=>el.completed===true):
                          state.filter==="toBeDone"? state.todos.filter(el=>el.completed===false):
                          state.filter==="All"?state.todos:null
          } 

          default:
            return state
         
                     
        
        //  case "FILTERClICK" :
        //   return  {...state,
        //    filterr:!state.filterr
        //    }
        //  case "DONE" :
        //   return  {...state,
        //    Done:state.todos.filter(el=> el.completed===false)
        //    }
        //    case "FILTERNOTDONECLICK" :
        //   return  {...state,
        //    filterNotDone:!state.filterNotDone
        //    }
        //  case "NOTDONE" :
        //   return  {...state,
        //    notDone:state.todos.filter(el=> el.completed===true)
        //    }
        
      
    }
   
  }