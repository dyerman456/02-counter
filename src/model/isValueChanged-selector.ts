import { RootState } from '../app/store'

export const selectIsValueChanged = (state: RootState): boolean =>
  state.counter.isValueChanged
