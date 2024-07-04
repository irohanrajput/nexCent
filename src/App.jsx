import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import PageNotFound from './components/PageNotFound'


function App() {
  return (
    <div className='flex flex-col overflow-hidden'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='*' element={<PageNotFound />} />

    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App
