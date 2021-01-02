import React from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import DateTime from './components/Date';
import './App.css';



function App({store}) {
 
  
  



  return (
    <div className="App">
      <DateTime/>
      <AddTask />
      <TaskList/>
    
    </div>
  );
}

export default App;
