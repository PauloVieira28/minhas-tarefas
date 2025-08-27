import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './reducers/tasksReducer'
import FilterRudecer from './reducers/Filter'

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: FilterRudecer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
