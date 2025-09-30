import { Button } from './Button'
import React, { useEffect, useState } from 'react'
import { MaxValue } from './MaxValue'
import { StartValue } from './StartValue'
import { useAppSelector } from '../common/hooks/useAppSelector'
import { selectStartValue } from '../model/startValue-selector'
import { selectMaxValue } from '../model/maxValue-selector'
import {
  resetCounterValueAC,
  setAppliedMaxValueAC,
  setAppliedStartValueAC,
  setIsValueChangedAC,
} from '../model/counter-reducer'
import { useAppDispatch } from '../common/hooks/useAppDispatch'
import { selectAppliedStartValue } from '../model/appliedStartValue-selector'
import { selectAppliedMaxValue } from '../model/appliedMaxValue-selector'

export type ErrorType = string | null

export const CounterSettings = () => {
  const dispatch = useAppDispatch()
  const startValue = useAppSelector(selectStartValue)
  const maxValue = useAppSelector(selectMaxValue)
  const appliedStartValue = useAppSelector(selectAppliedStartValue)
  const appliedMaxValue = useAppSelector(selectAppliedMaxValue)

  const [error, setError] = useState<ErrorType>(null) // error

  const resetCounterValue = () => {
    dispatch(resetCounterValueAC({ startValue }))
  }

  const setAppliedStartValue = () => {
    dispatch(setAppliedStartValueAC({ startValue }))
  }

  const setAppliedMaxValue = () => {
    dispatch(setAppliedMaxValueAC({ maxValue }))
  }

  const setIsValueChanged = (boolean: boolean) => {
    dispatch(setIsValueChangedAC({ boolean }))
  }

  const setValues = () => {
    resetCounterValue()
    setAppliedStartValue()
    setAppliedMaxValue()
    setIsValueChanged(false)
  }

  useEffect(() => {
    if (startValue >= maxValue || startValue < 0 || maxValue < 0) {
      setError('error')
    } else {
      setError(null)
    }
  }, [startValue, maxValue])

  const isBtnDisabled =
    startValue < 0 ||
    startValue >= maxValue ||
    (startValue === appliedStartValue && maxValue === appliedMaxValue)

  return (
    <div className='container settings'>
      <div className='container settings__values'>
        <MaxValue error={error} />
        <StartValue error={error} />
      </div>
      <div className='container'>
        <Button
          className='button'
          title='set'
          callback={setValues}
          isDisabled={isBtnDisabled}
        />
      </div>
    </div>
  )
}
