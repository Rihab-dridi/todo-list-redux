import React,{useState} from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css';


function App({store}) {
  // const [todos,setTodos]=useState([])
  
  



  return (
    <div className="App">
      <AddTask />
      <TaskList/>
    
    </div>
  );
}

export default App;
