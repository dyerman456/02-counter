import React, {useEffect, useReducer, useState} from 'react';
import '../App.css';
import {CounterControls} from "../components/CounterControls";
import {CounterSettings} from "../components/CounterSettings";
import {CounterTitle} from "../components/CounterTitle";
import {
  counterReducer,
  increaseCounterValueAC,
  resetCounterValueAC, setAppliedMaxValueAC, setAppliedStartValueAC, setIsValueChangedAC,
  setMaxValueAC,
  setStartValueAC
} from "./counter-reducer";

export type CounterType = {
  counterValue: number ,
  startValue: number,
  maxValue: number
  appliedStartValue: number,
  appliedMaxValue: number,
  isSetDisabled: boolean
  isValueChanged: boolean
}

function AppSimpleCounter() {

  // const [counterValue, setCounterValue] = useState(0) // value on the screen
  // const [startValue, setStartValue] = useState(0) // min value from input
  // const [maxValue, setMaxValue] = useState(10) // max value from input

  // const [appliedStartValue, setAppliedStartValue] = useState(startValue) // applied start value after button click
  // const [appliedMaxValue, setAppliedMaxValue] = useState(maxValue) // applied max value after button click

  // const [isSetDisabled, setIsSetDisabled] = useState(false) // if set button disabled
  // const [isValueChanged, setIsValueChanged] = useState(false) // if input value was changed

  const startValue = 0
  const maxValue = 5

  const [counter, dispatchCounter] = useReducer(counterReducer, {
    counterValue: 0,
    startValue: startValue,
    maxValue: maxValue,
    appliedStartValue: startValue,
    appliedMaxValue: maxValue,
    isSetDisabled: false,
    isValueChanged: false
  })

  // const increaseCounterValue = () => {
  //   if (counter.counterValue) {
  //     dispatchCounter(increaseCounterValueAC(counter.counterValue))
  //   }
  // }

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
    <div className="App">
      <div className="container">
        <CounterTitle
          startValue={counter.startValue}
          maxValue={counter.maxValue}
          counterValue={counter.counterValue}
          // appliedStartValue={counter.appliedStartValue}
          // appliedMaxValue={counter.appliedMaxValue}
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
        setMaxValue={() => {
          setMaxValue(counter.appliedMaxValue)
          setIsValueChanged(true)
        }}
        // setMaxValue={v => {
        //   setMaxValue(v)
        //   setIsValueChanged(true)
        // }}
        setStartValue={() => {
          setStartValue(counter.appliedStartValue)
          setIsValueChanged(true)
        }}
        // startValue={counter.startValue}
        // setStartValue={v => {
        //   setStartValue(v)
        //   setIsValueChanged(true)
        // }}
        setValues={setValues}
        // setValues={setValues}

        appliedStartValue={counter.appliedStartValue}
        appliedMaxValue={counter.appliedMaxValue}
        // isSetDisabled={counter.isSetDisabled}
      />
    </div>

  );
}

export default AppSimpleCounter;
