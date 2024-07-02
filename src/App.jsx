import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <div className='flex flex-col overflow-hidden'>
    <BrowserRouter>
    <LandingPage />
    </BrowserRouter>
    </div>
  )
}

export default App
