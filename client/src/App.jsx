import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Signup } from './Signup'
import { Routes,Route, Link } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
