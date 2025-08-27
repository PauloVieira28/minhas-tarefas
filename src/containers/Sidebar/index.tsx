import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../CardFilter'
import * as S from './styles'
import { RootReducer } from '../../store'
import { changeFilter } from '../../store/reducers/Filter'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.Field
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
        <S.Filters>
          <CardFilter caption="Pendentes" counter={1} />
          <CardFilter caption="Concluidas" counter={2} />
          <CardFilter caption="Urgentes" counter={3} />
          <CardFilter caption="Importantes" counter={4} />
          <CardFilter caption="Normal" counter={5} />
          <CardFilter ativo caption="todas" counter={10} />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default Sidebar
