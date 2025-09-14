import ButtonAdd from '../../components/ButtonAdd'
import Sidebar from '../../containers/Sidebar'
import ToDoList from '../../containers/ToDoList'

const Home = () => (
  <>
    <Sidebar showFilters />
    <ToDoList />
    <ButtonAdd />
  </>
)

export default Home
