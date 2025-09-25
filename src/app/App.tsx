import React from 'react'
import '../App.css'
import {
  increaseCounterValueAC,
  resetCounterValueAC,
  setAppliedMaxValueAC,
  setAppliedStartValueAC,
  setIsValueChangedAC,
  setMaxValueAC,
  setStartValueAC,
} from '../model/counter-reducer'
import { CounterTitle } from '../components/CounterTitle'
import { CounterControls } from '../components/CounterControls'
import { CounterSettings } from '../components/CounterSettings'
import { useAppDispatch } from '../common/hooks/useAppDispatch'
import { useAppSelector } from '../common/hooks/useAppSelector'
import { selectCounter } from '../model/counter-selectors'

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
  const counter = useAppSelector(selectCounter)

  const dispatch = useAppDispatch()

  const increaseCounterValue = () => {
    const counterValue = counter.counterValue
    dispatch(increaseCounterValueAC({ counterValue }))
  }

  const resetCounterValue = () => {
    const startValue = counter.startValue
    dispatch(resetCounterValueAC({ startValue }))
  }

  const setStartValue = (value: number) => {
    dispatch(setStartValueAC({ value }))
  }

  const setMaxValue = (value: number) => {
    dispatch(setMaxValueAC({ value }))
  }

  const setAppliedStartValue = () => {
    const startValue = counter.startValue
    dispatch(setAppliedStartValueAC({ startValue }))
  }

  const setAppliedMaxValue = () => {
    const maxValue = counter.maxValue
    dispatch(setAppliedMaxValueAC({ maxValue }))
  }

  const setIsValueChanged = (boolean: boolean) => {
    dispatch(setIsValueChangedAC({ boolean }))
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
