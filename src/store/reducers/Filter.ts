import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as emums from '../../utils/enums/task'

type FilterState = {
  term?: string
  critery: 'allFilters' | 'status' | 'priority' | 'normal'
  value?: emums.Priority | emums.Status
}

const initialState: FilterState = {
  term: '',
  critery: 'allFilters'
}

const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.critery = action.payload.critery
      state.value = action.payload.value
    }
  }
})

export const { changeTerm, changeFilter } = FilterSlice.actions
export default FilterSlice.reducer
