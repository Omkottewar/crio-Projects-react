import React from 'react'

const Flags = ({data}) => {
    const {name,flag,abbr} = data;
  return (
    <div className='w-48 border border-gray-300  shadow-lg rounded-md flex flex-col  items-center h-44 p-2'>
        <img className='w-24 h-24   rounded-md' src={flag} alt={abbr} />
        <p className='font-bold mt-2 text-center'>{name}</p>
    </div>
  )
}

export default Flags