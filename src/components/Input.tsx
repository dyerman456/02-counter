import React, { ChangeEvent } from 'react'

type Props = {
  className?: string
  setValue: (value: number) => void
  value: number
}

export const Input = (props: Props) => {
  debugger

  const { className, setValue, value } = props

  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.currentTarget.value))
  }

  return (
    <input
      type='number'
      className={className}
      value={value}
      onChange={changeValueHandler}
    />
  )
}
