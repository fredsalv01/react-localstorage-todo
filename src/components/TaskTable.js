import { TaskRow } from "./TaskRow"

export const Tasktable = ({tasks, toggleTask}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>
        {
          tasks.map(task => (
            <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
          ))
        }
      </tbody>
    </table>
  )
}