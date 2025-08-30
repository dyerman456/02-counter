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

  const [checkStartValue, setCheckStartValue] = useState(startValue)
  const [checkMaxValue, setCheckMaxValue] = useState(maxValue)

  // Сравнить, равны ли переменные в момент когда мы меняем инпуты

  const [isSetDisabled, setIsSetDisabled] = useState(false)

  const [isSetPressed, setIsSetPressed] = useState(false) // if set button pressed

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
    setIsSetPressed(true)
    setCheckStartValue(startValue)
    setCheckMaxValue(maxValue)
    localStorage.setItem("counterValue", JSON.stringify(startValue))
    localStorage.setItem("minValue", JSON.stringify(startValue))
    localStorage.setItem("maxValue", JSON.stringify(maxValue))

    localStorage.setItem("isSetPressed", JSON.stringify(true))
  }

  useEffect(() => {
    let counterValueAsString = localStorage.getItem("counterValue")

    let minValueAsString = localStorage.getItem("minValue")
    let maxValueAsString = localStorage.getItem("maxValue")

    let isSetPressedAsString = localStorage.getItem("isSetPressed")

    if (typeof counterValueAsString === "string") {
      setCounterValue(JSON.parse(counterValueAsString))
    }

    if (typeof minValueAsString === "string") {
      setStartValue(JSON.parse(minValueAsString))
    }

    if (typeof maxValueAsString === "string") {
      setMaxValue(JSON.parse(maxValueAsString))
    }

    if (typeof isSetPressedAsString === "string") {
      setIsSetPressed(JSON.parse(isSetPressedAsString))
    }

    if (typeof minValueAsString === "string") {
      setCheckStartValue(JSON.parse(minValueAsString))
    }

    if (typeof maxValueAsString === "string") {
      setCheckMaxValue(JSON.parse(maxValueAsString))
    }

    console.log("check start value " + (startValue === checkStartValue))
    console.log("check max value " + (maxValue === checkMaxValue))
  }, [])

  return (
    <div className="App">
      <div className="container">
        <CounterTitle
          startValue={startValue}
          maxValue={maxValue}
          isSetPressed={isSetPressed}
          counterValue={counterValue}
        />
        <CounterControls
          increaseCounterValue={increaseCounterValue}
          counterValue={counterValue}
          maxValue={maxValue}
          isSetPressed={isSetPressed}
          resetCounterValue={resetCounterValue}
          startValue={startValue}
          checkStartValue={checkStartValue}
          checkMaxValue={checkMaxValue}
        />
      </div>
      <CounterSettings
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        startValue={startValue}
        setStartValue={setStartValue}
        setValues={setValues}
        checkStartValue={checkStartValue}
        checkMaxValue={checkMaxValue}
        isSetDisabled={isSetDisabled}
        setIsSetDisabled={setIsSetDisabled}
      />
    </div>

  );
}

export default App;
