import { Input } from './Input'
import { ErrorType } from './CounterSettings'

type Props = {
  error: ErrorType
  startValue: number
  setStartValue: (value: number) => void
}

export const StartValue = (props: Props) => {
  const { error, startValue, setStartValue } = props

  return (
    <div className='settings__value'>
      <span>start value:</span>
      <Input
        className={`input ${error}`}
        value={startValue}
        setValue={setStartValue}
      />
    </div>
  )
}
