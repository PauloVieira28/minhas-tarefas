import { useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { remover, editing } from '../../store/reducers/tasksReducer'

import TaskModels from '../../models/taskModels'

type Props = TaskModels

const Task = ({ description, title, status, priority, id }: Props) => {
  const dispatch = useDispatch()
  const [IsEditing, setIsEditing] = useState(false)
  const [describe, setDescribe] = useState('')

  useEffect(() => {
    setDescribe(description)
  }, [description])

  const editingCancel = () => {
    setIsEditing(false)
    setDescribe(description)
  }

  return (
    <S.CardTasks>
      <S.Title>{title}</S.Title>
      <S.Tag params="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag params="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!IsEditing}
        value={describe}
        onChange={(e) => setDescribe(e.target.value)}
      />
      <S.SideBarActions>
        {IsEditing ? (
          <>
            <S.ButtonSalve
              onClick={() => {
                dispatch(
                  editing({
                    id,
                    title,
                    priority,
                    status,
                    description: describe
                  })
                )
                setIsEditing(false)
              }}
            >
              Salvar
            </S.ButtonSalve>
            <S.ButtonCancelRemove onClick={editingCancel}>
              Cancelar
            </S.ButtonCancelRemove>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
            <S.ButtonCancelRemove onClick={() => dispatch(remover(id))}>
              Remover
            </S.ButtonCancelRemove>
          </>
        )}
      </S.SideBarActions>
    </S.CardTasks>
  )
}

export default Task
