import { Provider } from 'react-redux'
import Sidebar from './containers/Sidebar'
import ToDoList from './containers/ToDoList'
import Storage from './store'
import StyledGlobal, { Container } from './styles'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import path from 'path'
import Home from './Pages/Home'
import Register from './Pages/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new',
    element: <Register />
  }
])

function App() {
  return (
    <Provider store={Storage}>
      <StyledGlobal />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Provider>
  )
}

export default App
