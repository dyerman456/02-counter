type Props = {
  startValue: number
  maxValue: number
  counterValue: number
  appliedStartValue: number
  appliedMaxValue: number
}

export const CounterTitle = (props: Props) => {

  const {
    startValue,
    maxValue,
    counterValue,
    appliedStartValue,
    appliedMaxValue
  } = props

  let counterTitle

  if (startValue < 0 || startValue >= maxValue) {
    counterTitle = (
      <h1 className="counter-value counter-value-error">Incorrect value!</h1>
    );
  } else if (startValue !== appliedStartValue || maxValue !== appliedMaxValue) {
    counterTitle = (
      <h1 className="counter-value counter-value-set">
        enter values and press 'set'
      </h1>
    );
  } else {
    counterTitle = (
      <h1 className={`counter-value ${maxValue === counterValue ? "counter-value-error" : ""}`}>
        {counterValue}
      </h1>
    );
  }

  return (
    <div className="container title-container">
      {counterTitle}
    </div>
  )
}