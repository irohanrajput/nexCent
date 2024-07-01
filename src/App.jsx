import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Body from './components/Body/Body.jsx'

function App() {
  return (
    <div className='flex flex-col'>
    <BrowserRouter>
    <Home />
    <Body />
    </BrowserRouter>
    </div>
  )
}

export default App
