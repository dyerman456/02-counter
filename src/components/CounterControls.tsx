import { Button } from './Button'
import React from 'react'
import { useAppSelector } from '../common/hooks/useAppSelector'
import {
  increaseCounterValueAC,
  resetCounterValueAC,
} from '../model/counter-reducer'
import { selectCounterValue } from '../model/counterValue-selector'
import { useAppDispatch } from '../common/hooks/useAppDispatch'
import { selectStartValue } from '../model/startValue-selector'
import { selectMaxValue } from '../model/maxValue-selector'
import { selectIsValueChanged } from '../model/isValueChanged-selector'

export const CounterControls = () => {

  const dispatch = useAppDispatch()
  const counterValue = useAppSelector(selectCounterValue)
  const startValue = useAppSelector(selectStartValue)
  const maxValue = useAppSelector(selectMaxValue)
  const isValueChanged = useAppSelector(selectIsValueChanged)

  const increaseCounterValue = () => {
    dispatch(increaseCounterValueAC({ counterValue }))
  }

  const resetCounterValue = () => {
    dispatch(resetCounterValueAC({ startValue }))
  }

  const isIncBtnDisabled = counterValue >= maxValue || isValueChanged
  const isResBtnDisabled = counterValue === startValue || isValueChanged

  return (
    <div className='container counter-controls'>
      <Button
        className='button counter-controls__button'
        title='inc'
        callback={increaseCounterValue}
        isDisabled={isIncBtnDisabled}
      />
      <Button
        className='button counter-controls__button'
        title='res'
        callback={resetCounterValue}
        isDisabled={isResBtnDisabled}
      />
    </div>
  )
}
