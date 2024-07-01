import React from 'react'

const InfoTile = ({icon, title, description}) => {
  return (
    <div className='flex flex-col p-4 m-4 shadow-md items-center h-80 w-80
     bg-inherit rounded-lg '>
        <div>
            <img src={icon} alt="icon" className='m-4 h-20 w-20 '/>
        </div>
        <div>
            <h1 className='text-center font-semibold text-2xl'>{title}</h1>
            <p className='text-center text-base'>{description}</p>
        </div>
      
    </div>
  )
}

export default InfoTile