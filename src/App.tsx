import Sidebar from './containers/Sidebar'
import ToDoList from './containers/ToDoList'
import StyledGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <StyledGlobal />
      <Container>
        <Sidebar />
        <ToDoList />
      </Container>
    </>
  )
}

export default App
