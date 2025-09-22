import React from 'react'

type Props = {
  title: string
  className?: string
  callback?: () => void
  isDisabled?: boolean
}

export const Button = (props: Props) => {
  const { title, className, callback, isDisabled } = props

  const onClickHandler = () => {
    if (callback) {
      callback()
    }
  }

  return (
    <button
      className={className}
      onClick={onClickHandler}
      disabled={isDisabled}
    >
      {title}
    </button>
  )
}
