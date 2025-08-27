import Task from '../../components/Task'
import { ToDoListContainer } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ToDoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term } = useSelector((state: RootReducer) => state.filter)

  const filterTask = () => {
    return itens.filter(
      (item) => item.title.toLowerCase().search(term.toLocaleLowerCase()) >= 0
    )
  }

  return (
    <ToDoListContainer>
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;{term}&quot;</p>
      <ul>
        {filterTask().map(({ description, title, status, priority, id }) => (
          <li key={title}>
            <Task
              id={id}
              description={description}
              title={title}
              status={status}
              priority={priority}
            />
          </li>
        ))}
      </ul>
    </ToDoListContainer>
  )
}

export default ToDoList
