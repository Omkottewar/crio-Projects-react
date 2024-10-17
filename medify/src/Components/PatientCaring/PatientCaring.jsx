import React from 'react';
import { blueTick, callLogo, patient1, patient2 } from '../../assets';
import './PatientCaring.css';

const PatientCaring = () => {
  return (
    <div className="patient-caring-wrapper">
      <div className="patient-caring-body">
        <div className="patient-caring-call-container">
          <span>
            <img src={callLogo} alt="Call logo" /> 
            <p className='font-bold'>Free Consultation</p>
          </span>
          <p>Consultation with the best</p>
        </div>
        <img className="patient-caring-image1" src={patient2} alt="Patient 1" />
        <img className="patient-caring-image2" src={patient1} alt="Patient 2" />
      </div>
      <div className="patient-caring-info">
        <p className="patient-caring-heading">HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
        <p className="patient-caring-title">Patient <span className='text-[#2AA7FF]'> Caring</span></p>
        <p className="patient-caring-description"> 
          Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
        </p>
        <div className="patient-caring-feature">
          <img src={blueTick} alt="Blue tick" />
          <p>Stay Updated About Your Health</p>
        </div>
        <div className="patient-caring-feature">
          <img src={blueTick} alt="Blue tick" />
          <p>Check Your Results Online</p>
        </div>
        <div className="patient-caring-feature">
          <img src={blueTick} alt="Blue tick" />
          <p>Manage Your Appointments</p>
        </div>
      </div>
    </div>
  );
};

export default PatientCaring;
