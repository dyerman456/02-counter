import { RootState } from '../app/store'
import { CounterType } from '../app/App'

export const selectCounter = (state: RootState): CounterType => state.counter
