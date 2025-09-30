import { Input } from './Input'
import React from 'react'
import { ErrorType } from './CounterSettings'
import { setIsValueChangedAC, setMaxValueAC } from '../model/counter-reducer'
import { useAppDispatch } from '../common/hooks/useAppDispatch'
import { useAppSelector } from '../common/hooks/useAppSelector'
import { selectMaxValue } from '../model/maxValue-selector'

type Props = {
  error: ErrorType
}

export const MaxValue = (props: Props) => {
  const {error} = props

  const dispatch = useAppDispatch()
  const maxValue = useAppSelector(selectMaxValue)

  const setIsValueChanged = (boolean: boolean) => {
    dispatch(setIsValueChangedAC({ boolean }))
  }

  const setMaxValue = (value: number) => {
    dispatch(setMaxValueAC({ value }))
    setIsValueChanged(true)
  }

  return (
    <div className='settings__value'>
      <span>max value:</span>
      <Input
        className={`input ${error}`}
        value={maxValue}
        setValue={setMaxValue}
      />
    </div>
  )
}
