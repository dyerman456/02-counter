import {Input} from "./Input";
import {Button} from "./Button";
import React, {useEffect, useState} from "react";

type Props = {
  maxValue: number
  setMaxValue: (value: number) => void
  startValue: number
  setStartValue: (value: number) => void
  setValues: () => void
  isSetDisabled: boolean
  setIsSetDisabled: (isSetDisabled: boolean) => void
  appliedStartValue: number
  appliedMaxValue: number
}

export const CounterSettings = (props: Props) => {

  const {
    maxValue,
    setMaxValue,
    startValue,
    setStartValue,
    setValues,
    appliedStartValue,
    appliedMaxValue
  } = props

  const [error, setError] = useState<string | null>(null) // error

  useEffect(() => {
    // setIsSetDisabled(startValue >= 0 && maxValue >= 0 && startValue === appliedStartValue && maxValue === appliedMaxValue)
    //  || startValue >= maxValue
    if (startValue >= maxValue || startValue < 0 || maxValue < 0) {
      setError("error")
    } else {
      setError(null)
    }
  }, [startValue, maxValue])

  return (
    <div className="container settings">
      <div className="container settings__values">
        <div className="settings__value">
          <span>max value:</span>
          <Input className={`input ${error}`} value={maxValue} setValue={setMaxValue}/>
        </div>
        <div className="settings__value">
          <span>start value:</span>
          <Input className={`input ${error}`} value={startValue} setValue={setStartValue}/>
        </div>
      </div>
      <div className="container">
        <Button className="button" title="set" callback={setValues} isDisabled={startValue < 0 || startValue >= maxValue || startValue === appliedStartValue && maxValue === appliedMaxValue}/>
      </div>
    </div>
  )
}