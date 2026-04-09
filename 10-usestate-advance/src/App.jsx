import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:'Sarthak',age:19})

  const [nums, setNums] = useState([10,20,30])

  const btnClicked = () => {
    // const newNum = {...num};
    // newNum.user = 'Aman'
    // newNum.age = 100
    // setNum(newNum)
    setNum(prev=>({...prev, user:'Zephyr', age:20}))
  }

  const btnClickedd = () => {
    const newNums = [...nums]
    newNums.push(99)
    setNums(newNums)
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button> <br/>
      <h2>{nums}</h2>
      <button onClick={btnClickedd}>Click</button>
    </div>
  )
}

export default App