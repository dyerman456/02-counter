import { RootState } from '../app/store'

export const selectMaxValue = (state: RootState): number =>
  state.counter.maxValue
