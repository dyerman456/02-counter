import { Input } from './Input'
import { ErrorType } from './CounterSettings'
import { useAppDispatch } from '../common/hooks/useAppDispatch'
import { useAppSelector } from '../common/hooks/useAppSelector'
import { setIsValueChangedAC, setStartValueAC } from '../model/counter-reducer'
import { selectStartValue } from '../model/startValue-selector'

type Props = {
  error: ErrorType
}

export const StartValue = (props: Props) => {
  const { error } = props

  const dispatch = useAppDispatch()
  const startValue = useAppSelector(selectStartValue)

  const setIsValueChanged = (boolean: boolean) => {
    dispatch(setIsValueChangedAC({ boolean }))
  }

  const setStartValue = (value: number) => {
    dispatch(setStartValueAC({ value }))
    setIsValueChanged(true)
  }

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
