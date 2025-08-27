import {Input} from "./Input";
import {Button} from "./Button";
import React from "react";

type Props = {
  error: string | null
  maxValue: number
  setMaxValue: (value: number) => void
  startValue: number
  setStartValue: (value: number) => void
  setValues: () => void
}

export const CounterSettings = (props: Props) => {

  const {error, maxValue, setMaxValue, startValue, setStartValue, setValues} = props

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
        <Button className="button" title="set" callback={setValues}/>
      </div>
    </div>
  )
}