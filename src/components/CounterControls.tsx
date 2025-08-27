import {Button} from "./Button";
import React from "react";

type Props = {
  increaseCounterValue: () => void
  counterValue: number
  maxValue: number
  isSetPressed: boolean
  resetCounterValue: () => void
  startValue: number
}

export const CounterControls = (props: Props) => {

  const {
    increaseCounterValue,
    counterValue,
    maxValue,
    isSetPressed,
    resetCounterValue,
    startValue} = props


  return (
    <div className="container counter-controls">
      <Button className="button counter-controls__button" title="inc" callback={increaseCounterValue}
              isDisabled={counterValue >= maxValue || !isSetPressed}/>
      <Button className="button counter-controls__button" title="res" callback={resetCounterValue}
              isDisabled={counterValue === startValue || !isSetPressed}/>
    </div>
  )
}