import {Button} from "./Button";
import React from "react";

type Props = {
  increaseCounterValue: () => void
  counterValue: number
  maxValue: number
  resetCounterValue: () => void
  startValue: number
  appliedStartValue: number
  appliedMaxValue: number
}

export const CounterControls = (props: Props) => {

  const {
    increaseCounterValue,
    counterValue,
    maxValue,
    resetCounterValue,
    startValue,
    appliedStartValue,
    appliedMaxValue
  } = props


  return (
    <div className="container counter-controls">
      <Button className="button counter-controls__button" title="inc" callback={increaseCounterValue}
              isDisabled={counterValue >= maxValue || startValue !== appliedStartValue || maxValue !== appliedMaxValue}/>
      <Button className="button counter-controls__button" title="res" callback={resetCounterValue}
              isDisabled={counterValue === startValue || startValue !== appliedStartValue || maxValue !== appliedMaxValue}/>
    </div>
  )
}