import { RootState } from '../app/store'

export const selectAppliedStartValue = (state: RootState): number => state.counter.appliedStartValue
