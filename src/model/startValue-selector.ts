import { RootState } from '../app/store'

export const selectStartValue = (state: RootState): number => state.counter.startValue
