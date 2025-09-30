import { createAction, createReducer } from '@reduxjs/toolkit'

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

export type CounterType = {
  counterValue: number // value on the screen
  startValue: number // min value from input
  maxValue: number // max value from input
  appliedStartValue: number // applied start value after button click for title change
  appliedMaxValue: number // applied max value after button click for title change
  isSetDisabled: boolean // if set button disabled
  isValueChanged: boolean // if input value was changed
}

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

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increaseCounterValueAC, (state) => {
      state.counterValue += 1
    })
    .addCase(resetCounterValueAC, (state, action) => {
      state.counterValue = action.payload.startValue
    })
    .addCase(setStartValueAC, (state, action) => {
      state.startValue = action.payload.value
    })
    .addCase(setMaxValueAC, (state, action) => {
      state.maxValue = action.payload.value
    })
    .addCase(setAppliedStartValueAC, (state, action) => {
      state.appliedStartValue = action.payload.startValue
    })
    .addCase(setAppliedMaxValueAC, (state, action) => {
      state.appliedMaxValue = action.payload.maxValue
    })
    .addCase(setIsValueChangedAC, (state, action) => {
      state.isValueChanged = action.payload.boolean
    })
})
