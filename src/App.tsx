import { Provider } from 'react-redux'
import Sidebar from './containers/Sidebar'
import ToDoList from './containers/ToDoList'
import Storage from './store'
import StyledGlobal, { Container } from './styles'

function App() {
  return (
    <Provider store={Storage}>
      <StyledGlobal />
      <Container>
        <Sidebar />
        <ToDoList />
      </Container>
    </Provider>
  )
}

export default App
