import { RootState } from '../app/store'

export const selectIsSetDisabled = (state: RootState): boolean => state.counter.isSetDisabled
