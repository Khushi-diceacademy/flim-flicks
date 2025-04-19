import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'

function App() {
  return (
    <div className='bg-black w-screen h-screen flex'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    
    
    </div>
  )
}

export default App