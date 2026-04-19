import React, { useContext, useState } from 'react'
import {ThemeDataContext} from '../context/ThemeContext'

const Button = () => {

    const [theme, settheme] = useContext(ThemeDataContext)

    const changetheme = () => {
        settheme('dark')
    }

  return (
    <div>
      <button onClick={changetheme}> Change Theme </button>
    </div>
  )
}

export default Button
