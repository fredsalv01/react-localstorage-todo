import { useState, useEffect } from "react";
import "./App.css";
import Container from "./components/Container";
import { TaskCreator } from "./components/TaskCreator";
import { Tasktable } from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName) {
    tasksItems.find((task) => task.name === taskName)
      ? alert("La tarea ya existe", "error")
      : setTasksItems([...tasksItems, { name: taskName, done: false }]);
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((taskItem) =>
        taskItem.name === task.name
          ? { ...taskItem, done: !taskItem.done }
          : taskItem
      )
    );
  };

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter((task) => !task.done));
    setShowCompleted(false)
  };

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
    <main className="bg-dark vh-100 text-white">
        <Container>

          <TaskCreator createNewTask={createNewTask} />
          <Tasktable tasks={tasksItems} toggleTask={toggleTask} />

          <VisibilityControl
            isChecked={showCompleted}
            setShowCompleted={(checked) => setShowCompleted(checked)}
            cleanTasks={cleanTasks}
          />
          {showCompleted === true && (
            <Tasktable
              tasks={tasksItems}
              toggleTask={toggleTask}
              showCompleted={showCompleted}
            />
          )}
        </Container>
    </main>
  );
}

export default App;
