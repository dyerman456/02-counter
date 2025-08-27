import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterControls} from "./components/CounterControls";
import {CounterSettings} from "./components/CounterSettings";
import {CounterTitle} from "./components/CounterTitle";

function App() {

  const [counterValue, setCounterValue] = useState<number>(0) // value on the screen
  const [startValue, setStartValue] = useState<number>(0) // min value from input
  const [maxValue, setMaxValue] = useState<number>(1) // max value from input

  const [error, setError] = useState<string | null>(null) // error
  const [isSetPressed, setIsSetPressed] = useState(false)

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
  }, [])

  useEffect(() => {
    if (startValue >= maxValue || startValue < 0 || maxValue < 0) {
      setError("error")
    } else {
      setError(null)
    }
  }, [startValue, maxValue])

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
        />
      </div>
      <CounterSettings
        error={error}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        startValue={startValue}
        setStartValue={setStartValue}
        setValues={setValues}
      />
    </div>

  );
}

export default App;
