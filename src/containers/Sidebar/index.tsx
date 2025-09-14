import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../CardFilter'
import * as S from './styles'
import { Button, Field } from '../../styles'

import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/Filter'
import * as enums from '../../utils/enums/task'
import { useNavigate } from 'react-router-dom'

type Props = {
  showFilters: boolean
}

const Sidebar = ({ showFilters }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <Field
              type="text"
              placeholder="Buscar"
              value={term}
              onChange={(e) => dispatch(changeTerm(e.target.value))}
            />
            <S.Filters>
              <CardFilter
                value={enums.Status.PENDENTE}
                critery="status"
                caption="Pendentes"
              />

              <CardFilter
                value={enums.Status.CONCLUIDA}
                critery="status"
                caption="Concluidas"
              />
              <CardFilter
                value={enums.Priority.URGENTE}
                critery="priority"
                caption="Urgentes"
              />
              <CardFilter
                value={enums.Priority.IMPORTANTE}
                critery="priority"
                caption="Importantes"
              />
              <CardFilter
                value={enums.Priority.NORMAL}
                critery="priority"
                caption="Normal"
              />

              <CardFilter critery="allFilters" caption="Todos" />
            </S.Filters>
          </>
        ) : (
          <Button onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default Sidebar
