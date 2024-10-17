import React from 'react'
import "./FindDoctors.css"
import SearchDoctor from '../SearchDoctor/SearchDoctor'
import FrequentQuestions from '../FrequentQuestions/FrequentQuestions'
import FindDoctorArea from '../FindDoctorArea/FindDoctorArea'

const FindDoctors = () => {
  return (
    <div className='find-doctors bg-[#E7F0FF] '>
        <div className="w-screen h-[110px] bg-[#2AA8FF] rounded-bl-2xl rounded-br-2xl"></div>
        <SearchDoctor/>
        <FindDoctorArea/>
        <FrequentQuestions/>
    </div>
  )
}

export default FindDoctors