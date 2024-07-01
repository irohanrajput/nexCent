import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import OurClients from './OurClients'

function Home() {
  return (
    <div className='flex flex-col ' style={{backgroundColor:"#F5F7FA"}}>
      <Navbar />
      <Hero />
      <OurClients />
    </div>
  )
}

export default Home
