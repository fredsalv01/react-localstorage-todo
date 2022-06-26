import { useState, useEffect } from 'react';
import './App.css';
import { TaskCreator } from './components/TaskCreator';

function App() {
  
  const [tasksItems, setTasksItems] = useState([]);

  function createNewTask(taskName){
    tasksItems.find(task => task.name === taskName)
    ? alert("La tarea ya existe", "error")
    : setTasksItems([...tasksItems, {name:taskName, done:false}]);
  }

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if(tasks){
      setTasksItems(JSON.parse(tasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);


  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask}/>
      <table>
        <thead>
          <tr>
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody>
          {
            tasksItems.map((task, index) => (
              <tr key={index}>
                <td>{task.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
