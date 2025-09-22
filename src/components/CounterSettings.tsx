import {Button} from "./Button";
import React, {useEffect, useState} from "react";
import {MaxValue} from "./MaxValue";
import {StartValue} from "./StartValue";

type Props = {
  maxValue: number
  setMaxValue: (value: number) => void
  startValue: number
  setStartValue: (value: number) => void
  setValues: () => void
  appliedStartValue: number
  appliedMaxValue: number
}

export type ErrorType = string | null

export const CounterSettings = (props: Props) => {

  const {
    maxValue,
    setMaxValue,
    startValue,
    setStartValue,
    setValues,
    appliedStartValue,
    appliedMaxValue,
  } = props

  const [error, setError] = useState<ErrorType>(null) // error

  useEffect(() => {
    if (startValue >= maxValue || startValue < 0 || maxValue < 0) {
      setError("error")
    } else {
      setError(null)
    }
  }, [startValue, maxValue])

  const isBtnDisabled = (startValue < 0 || startValue >= maxValue || startValue === appliedStartValue) && maxValue === appliedMaxValue

  return (
    <div className="container settings">
      <div className="container settings__values">
        <MaxValue error={error} maxValue={maxValue} setMaxValue={setMaxValue}/>
        <StartValue error={error} startValue={startValue} setStartValue={setStartValue}/>
      </div>
      <div className="container">
        <Button
          className="button"
          title="set"
          callback={setValues}
          isDisabled={isBtnDisabled}
        />
      </div>
    </div>
  )
}