import { RootState } from '../app/store'

export const selectAppliedMaxValue = (state: RootState): number =>
  state.counter.appliedMaxValue
