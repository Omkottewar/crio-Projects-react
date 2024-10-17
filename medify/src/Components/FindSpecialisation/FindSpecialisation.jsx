import React from 'react'

import { blood,dentist,primaryCare,cardiology,MRI,piscologist,laboratory,xRay } from '../../assets'
import './FindSpecialisation.css'


const FindSpecialisation = () => {

    const specialisation = [
        dentist,primaryCare,cardiology,MRI,blood,piscologist,laboratory,xRay
    ]
  return (
    <div className='findSpecialisation-body'>
        <h1 className='heading'>Find By Specialisation</h1>
        <div className="findSpecialisation-container">
        {
            specialisation.map((card,index)=>{
                return(
                    <img className='findSpecialisation-image' src={card} key={index} />
                )
            })
        }
        </div>
        <button className='findSpecialisation-btn'>View All</button>
    </div>
  )
}

export default FindSpecialisation