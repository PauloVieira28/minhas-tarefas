import { FormEvent, useState } from 'react'
import { ButtonSalve, MainContainer, Title } from '../../styles'
import { Field } from '../../styles'
import { FormStyled, Options, OptionPrioritys } from './styles'

import * as enums from '../../utils/enums/task'
import { useDispatch } from 'react-redux'
import { register } from '../../store/reducers/tasksReducer'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titleForm, setTitleForm] = useState('')
  const [descriptionForm, setDescriptionForm] = useState('')
  const [priorityForm, setPriorityForm] = useState(enums.Priority.NORMAL)

  const taskAdd = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      register({
        title: titleForm,
        description: descriptionForm,
        priority: priorityForm,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Nova Tarefa</Title>
      <FormStyled onSubmit={taskAdd}>
        <Field
          value={titleForm}
          onChange={(e) => setTitleForm(e.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Field
          value={descriptionForm}
          onChange={(e) => setDescriptionForm(e.target.value)}
          as="textarea"
          placeholder="Descricao da tarefa"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priority) => (
            <OptionPrioritys key={priority}>
              <input
                type="radio"
                id={priority}
                name="priority"
                value={priority}
                onChange={(e) =>
                  setPriorityForm(e.target.value as enums.Priority)
                }
                defaultChecked={priority === enums.Priority.NORMAL}
              />
              <label htmlFor={priority}>{priority}</label>
            </OptionPrioritys>
          ))}
        </Options>
        <ButtonSalve type="submit">Salvar</ButtonSalve>
      </FormStyled>
    </MainContainer>
  )
}

export default Form
