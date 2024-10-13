import React from 'react'
import './FamilyCard.css'

const FamilyCard = ({item}) => {
    const {numbers,text,image}=item
  return (
    <div className='familyCard'>
        <img src={image} alt="" />
        <p>{numbers}</p>
        <p>{text}</p>
    </div>
  )
}

export default FamilyCard