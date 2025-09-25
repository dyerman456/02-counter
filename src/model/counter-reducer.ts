import { CounterType } from '../app/App'
import { createAction } from '@reduxjs/toolkit'

const startValue = 0
const maxValue = 5

const initialState: CounterType = {
  counterValue: 0,
  startValue: startValue,
  maxValue: maxValue,
  appliedStartValue: startValue,
  appliedMaxValue: maxValue,
  isSetDisabled: false,
  isValueChanged: false,
}
export const increaseCounterValueAC = createAction<{ counterValue: number }>(
  'counter/increaseCounterValue',
)

export const resetCounterValueAC = createAction<{ startValue: number }>(
  'counter/resetCounterValue',
)

export const setStartValueAC = createAction<{ value: number }>(
  'counter/setStartValue',
)

export const setMaxValueAC = createAction<{ value: number }>(
  'counter/setMaxValue',
)

export const setAppliedStartValueAC = createAction<{ startValue: number }>(
  'counter/setAppliedStartValue',
)

export const setAppliedMaxValueAC = createAction<{ maxValue: number }>(
  'counter/setAppliedMaxValue',
)

export const setIsValueChangedAC = createAction<{ boolean: boolean }>(
  'counter/setIsValueChanged',
)

type IncreaseCounterValueType = ReturnType<typeof increaseCounterValueAC>
type ResetCounterValueType = ReturnType<typeof resetCounterValueAC>
type SetStartValueType = ReturnType<typeof setStartValueAC>
type SetMaxValueType = ReturnType<typeof setMaxValueAC>
type SetAppliedStartValueType = ReturnType<typeof setAppliedStartValueAC>
type SetAppliedMaxValueType = ReturnType<typeof setAppliedMaxValueAC>
type SetIsValueChangedType = ReturnType<typeof setIsValueChangedAC>

type ActionType =
  | IncreaseCounterValueType
  | ResetCounterValueType
  | SetStartValueType
  | SetMaxValueType
  | SetAppliedStartValueType
  | SetAppliedMaxValueType
  | SetIsValueChangedType

export const counterReducer = (
  state: CounterType = initialState,
  action: ActionType,
) => {
  switch (action.type) {
    case 'increase_counter_value': {
      return { ...state, counterValue: action.payload.counterValue + 1 }
    }
    case 'reset_counter_value': {
      return { ...state, counterValue: action.payload.startValue }
    }
    case 'set_start_value': {
      return { ...state, startValue: action.payload.value }
    }
    case 'set_max_value': {
      return { ...state, maxValue: action.payload.value }
    }
    case 'set_applied_start_value': {
      return { ...state, appliedStartValue: action.payload.value }
    }
    case 'set_applied_max_value': {
      return { ...state, appliedMaxValue: action.payload.value }
    }
    case 'set_is_value_changed': {
      return { ...state, isValueChanged: action.payload.boolean }
    }
    default:
      return state
  }
}
