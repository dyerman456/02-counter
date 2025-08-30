import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterControls} from "./components/CounterControls";
import {CounterSettings} from "./components/CounterSettings";
import {CounterTitle} from "./components/CounterTitle";

function App() {
  debugger

  const [counterValue, setCounterValue] = useState<number>(0) // value on the screen
  const [startValue, setStartValue] = useState<number>(0) // min value from input
  const [maxValue, setMaxValue] = useState<number>(1) // max value from input

  const [appliedStartValue, setAppliedStartValue] = useState(startValue) // applied start value after button click
  const [appliedMaxValue, setAppliedMaxValue] = useState(maxValue) // applied max value after button click

  const [isSetDisabled, setIsSetDisabled] = useState(false) // if set button disabled

  const increaseCounterValue = () => {
    setCounterValue(prevState => {
      const newValue = prevState + 1
      localStorage.setItem("counterValue", JSON.stringify(newValue))
      return newValue
    })
  }

  const resetCounterValue = () => {
    setCounterValue(startValue)
  }

  const setValues = () => {
    setCounterValue(startValue)
    setAppliedStartValue(startValue)
    setAppliedMaxValue(maxValue)
    localStorage.setItem("counterValue", JSON.stringify(startValue))
    localStorage.setItem("minValue", JSON.stringify(startValue))
    localStorage.setItem("maxValue", JSON.stringify(maxValue))
  }

  useEffect(() => {
    let counterValueAsString = localStorage.getItem("counterValue")

    let minValueAsString = localStorage.getItem("minValue")
    let maxValueAsString = localStorage.getItem("maxValue")

    if (typeof counterValueAsString === "string") {
      setCounterValue(JSON.parse(counterValueAsString))
    }

    if (typeof minValueAsString === "string") {
      setStartValue(JSON.parse(minValueAsString))
    }

    if (typeof maxValueAsString === "string") {
      setMaxValue(JSON.parse(maxValueAsString))
    }

    if (typeof minValueAsString === "string") {
      setAppliedStartValue(JSON.parse(minValueAsString))
    }

    if (typeof maxValueAsString === "string") {
      setAppliedMaxValue(JSON.parse(maxValueAsString))
    }
  }, [])

  return (
    <div className="App">
      <div className="container">
        <CounterTitle
          startValue={startValue}
          maxValue={maxValue}
          counterValue={counterValue}
          appliedStartValue={appliedStartValue}
          appliedMaxValue={appliedMaxValue}
        />
        <CounterControls
          increaseCounterValue={increaseCounterValue}
          counterValue={counterValue}
          maxValue={maxValue}
          resetCounterValue={resetCounterValue}
          startValue={startValue}
          appliedStartValue={appliedStartValue}
          appliedMaxValue={appliedMaxValue}
        />
      </div>
      <CounterSettings
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        startValue={startValue}
        setStartValue={setStartValue}
        setValues={setValues}
        appliedStartValue={appliedStartValue}
        appliedMaxValue={appliedMaxValue}
        isSetDisabled={isSetDisabled}
        setIsSetDisabled={setIsSetDisabled}
      />
    </div>

  );
}

export default App;
