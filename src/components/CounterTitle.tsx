import { useAppSelector } from '../common/hooks/useAppSelector'
import { selectMaxValue } from '../model/maxValue-selector'
import { selectStartValue } from '../model/startValue-selector'
import { selectCounterValue } from '../model/counterValue-selector'
import { selectIsValueChanged } from '../model/isValueChanged-selector'

export const CounterTitle = () => {

  const counterValue = useAppSelector(selectCounterValue)
  const startValue = useAppSelector(selectStartValue)
  const maxValue = useAppSelector(selectMaxValue)
  const isValueChanged = useAppSelector(selectIsValueChanged)

  let counterTitle

  if (startValue < 0 || startValue >= maxValue) {
    counterTitle = (
      <h1 className='counter-value counter-value-error'>Incorrect value!</h1>
    )
  } else if (isValueChanged) {
    counterTitle = (
      <h1 className='counter-value counter-value-set'>
        enter values and press 'set'
      </h1>
    )
  } else {
    counterTitle = (
      <h1
        className={`counter-value ${maxValue === counterValue ? 'counter-value-error' : ''}`}
      >
        {counterValue}
      </h1>
    )
  }

  return <div className='container title-container'>{counterTitle}</div>
}
