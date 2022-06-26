import { TaskRow } from "./TaskRow"

export const Tasktable = ({tasks, toggleTask, showCompleted = false}) => {

  const taskTableRows = (doneValue) => {
    
    return tasks
      .filter(task => task.done === doneValue)
      .map(task => {
        return <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      })
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>
        {
          taskTableRows(showCompleted)
        }
      </tbody>
    </table>
  )
}