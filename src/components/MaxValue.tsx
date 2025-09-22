import { Input } from './Input'
import React from 'react'
import { ErrorType } from './CounterSettings'

type Props = {
  error: ErrorType
  maxValue: number
  setMaxValue: (value: number) => void
}

export const MaxValue = (props: Props) => {
  const { error, maxValue, setMaxValue } = props

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
