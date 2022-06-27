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
    <table className="table table-dark table-striped table-bordered border-secondary my-3">
      <thead>
        <tr className={!showCompleted ? "table-primary" : "table-primary"}>
          <th>{ !showCompleted ? "To do" : "Done" } </th>
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