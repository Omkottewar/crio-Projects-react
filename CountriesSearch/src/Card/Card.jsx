import React from 'react'
import './Card.css'


const Card = ({data}) => {
    const {name ,flags} = data
  return (
<div className="countryCard">

<img className='card__image' src={flags.png} alt="" />
<p >{name.common}</p>
</div>
  )
}

export default Card