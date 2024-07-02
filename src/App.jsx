import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <div className='flex flex-col overflow-hidden'>
    <BrowserRouter>
    <Home />
    
    </BrowserRouter>
    </div>
  )
}

export default App
