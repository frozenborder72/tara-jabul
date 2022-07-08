import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import worksService from './worksService'

const initialState = {
  works: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const getWorks = createAsyncThunk('works/getAll', async () => {
  try {
    return await worksService.getWorks()
  } catch (error) {
    console.error(error)
  }
})

export const worksSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getWorks.pending, state => {
        state.isLoading = true
      })
      .addCase(getWorks.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.works = action.payload
      })
      .addCase(getWorks.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
      })
  },
})

export default worksSlice.reducer
