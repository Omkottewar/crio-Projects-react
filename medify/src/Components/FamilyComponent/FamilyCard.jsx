import React from 'react'
import './FamilyCard.css'

const FamilyCard = ({item}) => {
    const {numbers,text,image}=item
  return (
    <div className='familyCard' >
        <img className='familyCard-image' src={image} alt="" />
        <p className='familyCard-nums'>{numbers}</p>
        <p className='familyCard-text'>{text}</p>
    </div>
  )
}

export default FamilyCard