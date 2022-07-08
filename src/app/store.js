import { configureStore } from '@reduxjs/toolkit'
import worksReducer from '../features/works/worksSlice'

export const store = configureStore({
  reducer: {
    works: worksReducer,
  },
})
