import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import SearchArea from '../SearchArea/SearchArea'

const Home = () => {
  return (
    <div className=''>
<div className= " flex flex-col items-center bg-gradient-to-r  from-[#E7F0FF] to-[rgba(232,241,255,0.47)]">
 <span className='bg-[#2AA7FF] w-screen text-center text-[14px] h-[40px]'>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</span>
<Navbar/>
<Hero/>
<SearchArea/>
</div>

    </div>
  )
}


export default Home