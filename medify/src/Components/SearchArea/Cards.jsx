import React from 'react'

import './Card.css'
const Cards = ({data}) => {
    const {name ,image} = data
  return (

<div className='card'>
    <img src={image} alt="" />
    <p>{name}</p>
    </div>
  )
}

export default Cards