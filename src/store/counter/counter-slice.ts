import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICounterInitialState {
  value: number
}

const initialState: ICounterInitialState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    addAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
    decrement(state) {
      state.value--
    },
  },
})

export const { increment, addAmount, decrement } = counterSlice.actions
export const counterReducer = counterSlice.reducer
