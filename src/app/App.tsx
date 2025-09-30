import React from 'react'
import '../App.css'
import { CounterTitle } from '../components/CounterTitle'
import { CounterControls } from '../components/CounterControls'
import { CounterSettings } from '../components/CounterSettings'

// 1) проиписать селекторы для отдельных свойств counterType
// 2) Перенести функции в файлы, где они используются
// 3) сделать так, чтобы кнопка set дизейблилась при ошибке

// функция resetCounterValue используется в 3 местах: App.tsx, CounterControls.tsx и CounterSettings.tsx

function AppSimpleCounter() {
  return (
    <div className='App'>
      <div className='container'>
        <CounterTitle />
        <CounterControls />
      </div>
      <CounterSettings />
    </div>
  )
}

export default AppSimpleCounter
