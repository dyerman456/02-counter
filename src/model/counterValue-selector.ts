import { RootState } from '../app/store'

export const selectCounterValue = (state: RootState): number => state.counter.counterValue
