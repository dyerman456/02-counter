import {useEffect} from "react";

type Props = {
  startValue: number
  maxValue: number
  isSetPressed: boolean
  counterValue: number
}

export const CounterTitle = (props: Props) => {

  const {startValue, maxValue, isSetPressed, counterValue} = props

  let counterTitle

  if (startValue < 0 || startValue >= maxValue) {
    counterTitle = (
      <h1 className="counter-value counter-value-error">Incorrect value!</h1>
    );
  } else if (isSetPressed) {
    counterTitle = (
      <h1 className={`counter-value ${maxValue === counterValue ? "counter-value-error" : ""}`}>
        {counterValue}
      </h1>
    );
  } else {
    counterTitle = (
      <h1 className="counter-value counter-value-set">
        enter values and press 'set'
      </h1>
    );
  }

  return (
    <div className="container">
      {counterTitle}
    </div>
  )
}