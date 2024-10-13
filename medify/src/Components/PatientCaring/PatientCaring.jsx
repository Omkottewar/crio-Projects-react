import React from 'react'
import { blueTick, callLogo, patient1,patient2 } from '../../assets'
import './PatientCaring.css'

const PatientCaring = () => {
  return (
    <div className=" flex">
        <div className="patiendCaring__body flex">
          <div className="call__container">
            <span><img src={callLogo} alt="" />Free Consultation </span>
            <p>Consultation with the best</p>
          </div>
        <img  className='patient__image1' src={patient1} alt="" />
        <img className='patient__image2' src={patient2} alt="" />
        </div>
        <div className="">
          <p>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
          <p>Patient Caring</p>
          <p>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
          <span><img src={blueTick} alt="" /><p>Stay Updated About Your Health</p></span>
          <span><img src={blueTick} alt="" /><p>Check Your Results Online</p></span>
          <span><img  src={blueTick} alt="" /><p>Manage Your Appointments</p></span>
        </div>
    </div>
  )
}

export default PatientCaring