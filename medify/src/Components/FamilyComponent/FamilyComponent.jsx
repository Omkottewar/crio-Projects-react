import React from 'react'
import './FamilyComponent.css'
import {heart,labs,expert,hospitals} from '../../assets'
import FamilyCard from './FamilyCard'

const FamilyComponent = () => {
    const cards =[
        {
            text:"Happy Patients",
            numbers:"5000+",
            image: heart,
        },
        {
            text:"Hospitals",
            numbers:"200+",
            image: hospitals,
        },
        {
            text:"Laboratories",
            numbers:"1000+",
            image : labs,
        },
        {
            text:"Expert Doctors",
            numbers:"700+",
            image: expert,
        },
    ]
  return (
    <div className=' familyComponent flex '>
        <div className="">
            <p>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
            <p>Our Families</p>
            <p>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
        </div>
        <div className="flex">
            {cards.map((item,index)=>{
                return (
                    <FamilyCard key={index}  item={item}  />
                )
            })}
        </div>
    </div>
  )
}

export default FamilyComponent