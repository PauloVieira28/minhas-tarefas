import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as emums from '../../utils/enums/task'

type FilterState = {
  term: string
  critery: 'allFilters' | 'status' | 'priority'
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
    changeFilter: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    }
  }
})

export const { changeFilter } = FilterSlice.actions
export default FilterSlice.reducer
