import {CounterType} from "./App";

const startValue = 0
const maxValue = 5

const initialState: CounterType = {
  counterValue: 0,
  startValue: startValue,
  maxValue: maxValue,
  appliedStartValue: startValue,
  appliedMaxValue: maxValue,
  isSetDisabled: false,
  isValueChanged: false
}

type IncreaseCounterValueType = {
  type: 'increase_counter_value'
  payload: {
    counterValue: number
  }
}

type ResetCounterValueType = {
  type: 'reset_counter_value',
  payload: {
    startValue: number
  }
}

type SetStartValueType = {
  type: 'set_start_value',
  payload: {
    value: number
  }
}

type SetMaxValueType = {
  type: 'set_max_value',
  payload: {
    value: number
  }
}

type SetAppliedStartValueType = {
  type: 'set_applied_start_value',
  payload: {
    value: number
  }
}

type SetAppliedMaxValueType = {
  type: 'set_applied_max_value',
  payload: {
    value: number
  }
}

type SetIsValueChangedType = {
  type: 'set_is_value_changed',
  payload: {
    boolean: boolean
  }
}

type ActionType = IncreaseCounterValueType | ResetCounterValueType | SetStartValueType | SetMaxValueType | SetAppliedStartValueType | SetAppliedMaxValueType | SetIsValueChangedType

export const counterReducer = (state: CounterType = initialState, action: ActionType) => {
  switch (action.type) {
    case 'increase_counter_value': {
      return {...state, counterValue: action.payload.counterValue + 1}
    }
    case 'reset_counter_value': {
      return {...state, counterValue: action.payload.startValue}
    }
    case 'set_start_value': {
      return {...state, startValue: action.payload.value}
    }
    case 'set_max_value': {
      return {...state, maxValue: action.payload.value}
    }
    case 'set_applied_start_value': {
      return {...state, appliedStartValue: action.payload.value}
    }
    case 'set_applied_max_value': {
      return {...state, appliedMaxValue: action.payload.value}
    }
    case 'set_is_value_changed': {
      return {...state, isValueChanged: action.payload.boolean}
    }
    default:
      return state
  }
}

export const increaseCounterValueAC = (counterValue: number) => {
  return {
    type: 'increase_counter_value',
    payload: {
      counterValue
    }
  } as const
}

export const resetCounterValueAC = (startValue: number) => {
  return {
    type: 'reset_counter_value',
    payload: {
      startValue
    }
  } as const
}

export const setStartValueAC = (value: number) => {
  return {
    type: 'set_start_value',
    payload: {
      value
    }
  } as const
}

export const setMaxValueAC = (value: number) => {
  return {
    type: 'set_max_value',
    payload: {
      value
    }
  } as const
}

export const setAppliedStartValueAC = (value: number) => {
  return {
    type: 'set_applied_start_value',
    payload: {
      value
    }
  } as const
}

export const setAppliedMaxValueAC = (value: number) => {
  return {
    type: 'set_applied_max_value',
    payload: {
      value
    }
  } as const
}

export const setIsValueChangedAC = (boolean: boolean) => {
  return {
    type: 'set_is_value_changed',
    payload: {
      boolean
    }
  } as const
}