import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import {
  remover,
  editing,
  AlterStatus
} from '../../store/reducers/tasksReducer'

import TaskModels from '../../models/taskModels'
import { Button, ButtonSalve } from '../../styles'

import * as enums from '../../utils/enums/task'

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

  const alterStatusTask = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      AlterStatus({
        id,
        finished: e.target.checked
      })
    )
  }

  return (
    <S.CardTasks>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alterStatusTask}
        />
        <S.Title>
          {IsEditing && <em>Editando: </em>} {title}
        </S.Title>
      </label>

      <S.Tag $params="priority" $priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag $params="status" $status={status}>
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
            <ButtonSalve
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
            </ButtonSalve>
            <S.ButtonCancelRemove onClick={editingCancel}>
              Cancelar
            </S.ButtonCancelRemove>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
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
