import React, { useReducer } from 'react'
import '../App.css'
import {
  counterReducer,
  increaseCounterValueAC,
  resetCounterValueAC,
  setAppliedMaxValueAC,
  setAppliedStartValueAC,
  setIsValueChangedAC,
  setMaxValueAC,
  setStartValueAC,
} from './counter-reducer'
import { CounterTitle } from '../components/CounterTitle'
import { CounterControls } from '../components/CounterControls'
import { CounterSettings } from '../components/CounterSettings'

export type CounterType = {
  counterValue: number // value on the screen
  startValue: number // min value from input
  maxValue: number // max value from input
  appliedStartValue: number // applied start value after button click for title change
  appliedMaxValue: number // applied max value after button click for title change
  isSetDisabled: boolean // if set button disabled
  isValueChanged: boolean // if input value was changed
}

function AppSimpleCounter() {
  const startValue = 0
  const maxValue = 5

  const [counter, dispatchCounter] = useReducer(counterReducer, {
    counterValue: 0,
    startValue: startValue,
    maxValue: maxValue,
    appliedStartValue: startValue,
    appliedMaxValue: maxValue,
    isSetDisabled: false,
    isValueChanged: false,
  })

  const increaseCounterValue = () => {
    dispatchCounter(increaseCounterValueAC(counter.counterValue))
  }

  const resetCounterValue = () => {
    dispatchCounter(resetCounterValueAC(counter.startValue))
  }

  const setMaxValue = (value: number) => {
    dispatchCounter(setMaxValueAC(value))
  }

  const setStartValue = (value: number) => {
    dispatchCounter(setStartValueAC(value))
  }

  const setAppliedStartValue = () => {
    dispatchCounter(setAppliedStartValueAC(counter.startValue))
  }

  const setAppliedMaxValue = () => {
    dispatchCounter(setAppliedMaxValueAC(counter.maxValue))
  }

  const setIsValueChanged = (boolean: boolean) => {
    dispatchCounter(setIsValueChangedAC(boolean))
  }

  const setValues = () => {
    resetCounterValue()
    setAppliedStartValue()
    setAppliedMaxValue()
    setIsValueChanged(false)
  }

  return (
    <div className='App'>
      <div className='container'>
        <CounterTitle
          startValue={counter.startValue}
          maxValue={counter.maxValue}
          counterValue={counter.counterValue}
          isValueChanged={counter.isValueChanged}
        />
        <CounterControls
          increaseCounterValue={increaseCounterValue}
          counterValue={counter.counterValue}
          maxValue={counter.maxValue}
          resetCounterValue={resetCounterValue}
          startValue={counter.startValue}
          isValueChanged={counter.isValueChanged}
        />
      </div>
      <CounterSettings
        startValue={counter.startValue}
        maxValue={counter.maxValue}
        setMaxValue={(value: number) => {
          setMaxValue(value)
          setIsValueChanged(true)
        }}
        setStartValue={(value: number) => {
          setStartValue(value)
          setIsValueChanged(true)
        }}
        setValues={setValues}
        appliedStartValue={counter.appliedStartValue}
        appliedMaxValue={counter.appliedMaxValue}
      />
    </div>
  )
}

export default AppSimpleCounter
