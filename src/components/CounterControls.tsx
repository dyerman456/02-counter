import {Button} from "./Button";
import React from "react";

type Props = {
  increaseCounterValue: () => void
  counterValue: number
  maxValue: number
  resetCounterValue: () => void
  startValue: number
  isValueChanged: boolean
}

export const CounterControls = (props: Props) => {

  const {
    increaseCounterValue,
    counterValue,
    maxValue,
    resetCounterValue,
    startValue,
    isValueChanged
  } = props

  const isIncBtnDisabled = counterValue >= maxValue || isValueChanged
  const isResBtnDisabled = counterValue === startValue  || isValueChanged

  return (
    <div className="container counter-controls">
      <Button className="button counter-controls__button" title="inc" callback={increaseCounterValue}
              isDisabled={isIncBtnDisabled}/>
      <Button className="button counter-controls__button" title="res" callback={resetCounterValue}
              isDisabled={isResBtnDisabled}/>
    </div>
  )
}