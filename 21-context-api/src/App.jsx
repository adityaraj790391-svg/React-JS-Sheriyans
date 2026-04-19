import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, settheme] = useState('light')
  return (
    <div>
      <Navbar />
      <Button />
    </div>
  )
}

export default App

