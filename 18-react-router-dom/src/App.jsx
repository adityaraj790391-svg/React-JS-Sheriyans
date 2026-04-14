import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path = '/about'  element={<Contact/>}/>
        <Route path = 'contact' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
