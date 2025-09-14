import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { changeFilter } from '../../store/reducers/Filter'
import * as enums from '../../utils/enums/task'
import { RootReducer } from '../../store'

export type Props = {
  caption: string
  critery: 'allFilters' | 'status' | 'priority' | 'normal'
  value?: enums.Priority | enums.Status
}

const CardFilter = ({ caption, critery, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = {
    filter: useSelector((state: RootReducer) => state.filter),
    tasks: useSelector((state: RootReducer) => state.tasks)
  }

  const isAtive = () => {
    const sameCritery = filter.critery === critery
    const sameValue = filter.value === value

    return sameCritery && sameValue
  }

  const counterTasks = () => {
    if (critery === 'allFilters') return tasks.itens.length
    if (critery === 'priority') {
      return tasks.itens.filter((item) => item.priority === value).length
    }
    if (critery === 'status') {
      return tasks.itens.filter((item) => item.status === value).length
    }
  }

  const Filter = () => {
    dispatch(
      changeFilter({
        critery,
        value
      })
    )
  }
  const counter = counterTasks()
  const active = isAtive()

  return (
    <S.Card $active={active} onClick={Filter}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{caption}</S.Label>
    </S.Card>
  )
}

export default CardFilter
