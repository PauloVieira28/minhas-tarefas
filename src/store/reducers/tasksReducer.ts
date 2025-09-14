import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import TaskModels from '../../models/taskModels'
import * as enums from '../../utils/enums/task'

type TasksState = {
  itens: TaskModels[]
}

const initialState: TasksState = {
  itens: [
    {
      title: 'Estudar JavaScript',
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.PENDENTE,
      id: 1,
      description:
        'Estudar os conceitos de JavaScript, incluindo ES6+, manipulação do DOM e eventos.'
    },
    {
      title: 'Estudar Typescript',
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUIDA,
      id: 2,
      description:
        'Revisar os tipos básicos, interfaces, classes e funções em TypeScript.'
    },
    {
      title: 'Estudar React',
      priority: enums.Priority.NORMAL,
      status: enums.Status.PENDENTE,
      id: 3,
      description:
        'Aprender os fundamentos do React, como componentes, props, state e ciclo de vida.'
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((task) => task.id !== action.payload)
    },
    editing: (state, action: PayloadAction<TaskModels>) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)

      if (indexTask >= 0) state.itens[indexTask] = action.payload
    },
    register: (state, action: PayloadAction<Omit<TaskModels, 'id'>>) => {
      const TaskExists = state.itens.find(
        (t) => t.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (TaskExists) {
        alert('Ja existe uma tarefa com esse nome')
      } else {
        const lastTask = state.itens[state.itens.length - 1]
        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }
        state.itens.push(newTask)
      }
    },
    AlterStatus: (
      state,
      action: PayloadAction<{ id: number; finished: boolean }>
    ) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)

      if (indexTask >= 0)
        state.itens[indexTask].status = action.payload.finished
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
    }
  }
})

export const { remover, editing, register, AlterStatus } = tasksSlice.actions
export default tasksSlice.reducer
