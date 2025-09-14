import Task from '../../components/Task'
import { Title, MainContainer } from '../../styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ToDoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term, critery, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTask = () => {
    let filterTask = itens
    if (term !== undefined) {
      filterTask = filterTask.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (critery === 'priority') {
        filterTask = filterTask.filter((item) => item.priority === value)
      } else if (critery === 'status') {
        filterTask = filterTask.filter((item) => item.status === value)
      }
      return filterTask
    } else {
      return itens
    }
  }

  const resultFiltrage = (quantidade: number) => {
    let message = ''
    const complement =
      term !== undefined && term.length > 0 ? `e "${term}"` : ''
    if (critery === 'allFilters') {
      message = `${quantidade} tarefas(s) encontradas(s) como: "todas" ${complement}`
    } else {
      message = `${quantidade} tarefas(s) encontradas(s) como: "${`${critery}=${value}`}${complement}"`
    }
    return message
  }

  const tasks = filterTask()
  const message = resultFiltrage(tasks.length)

  return (
    <MainContainer>
      <Title as="p">{message}</Title>

      <ul>
        {tasks.map(({ description, title, status, priority, id }) => (
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
    </MainContainer>
  )
}

export default ToDoList
