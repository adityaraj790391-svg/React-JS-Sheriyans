import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)

  useEffect(function(){
    console.log('use effect is running');
  })

  return (
    <div>
      <h1>num is {num}</h1>
      <h2>num2 is {num2}</h2>
      <button onMouseEnter={() => {
        setnum(num+1)
      }}
      onMouseLeave={() => {
        setnum2(num2+10)
      }}>CLICK ME</button>
     
    </div>
  )
}

export default App
