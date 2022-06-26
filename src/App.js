import { useState, useEffect } from 'react';
import './App.css';
import { TaskCreator } from './components/TaskCreator';
import { Tasktable } from './components/TaskTable';

function App() {

  const [tasksItems, setTasksItems] = useState([]);

  function createNewTask(taskName) {
    tasksItems.find(task => task.name === taskName)
      ? alert("La tarea ya existe", "error")
      : setTasksItems([...tasksItems, { name: taskName, done: false }]);
  }

  const toggleTask = task => {
    setTasksItems(
      tasksItems.map(
        taskItem => taskItem.name === task.name 
        ? { ...taskItem, done: !taskItem.done } 
        : taskItem
      )
    );
  }

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      setTasksItems(JSON.parse(tasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);


  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <Tasktable tasks={tasksItems} toggleTask={toggleTask}/>
    </div>
  );
}

export default App;
