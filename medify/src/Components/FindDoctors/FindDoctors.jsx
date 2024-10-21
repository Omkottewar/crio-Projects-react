import React from 'react'
import "./FindDoctors.css"
import SearchDoctor from '../SearchDoctor/SearchDoctor'
import FrequentQuestions from '../FrequentQuestions/FrequentQuestions'
import FindDoctorArea from '../FindDoctorArea/FindDoctorArea'

const FindDoctors = () => {
  return (
    <div className='find-doctors bg-[#E7F0FF] '>
        <div className="w-full h-[110px] bg-[#2AA8FF] relative rounded-bl-2xl rounded-br-2xl"></div>
       <div className="relative -top-[50px]"> <SearchDoctor /></div>
        <FindDoctorArea/>
        <FrequentQuestions/>
    </div>
  )
}

export default FindDoctors