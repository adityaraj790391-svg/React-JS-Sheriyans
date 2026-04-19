import React, { useState } from 'react'
import { createContext } from 'react'

export const ThemeDataContext = createContext()

// methods for using context api - 
// create karo context
// provide karo data 
// use karo data ko

const ThemeContext = (props) => {

    const [theme, settheme] = useState('light')
    
  return (
    <div>
      <ThemeDataContext.Provider value = {[theme, settheme]}>
      {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
