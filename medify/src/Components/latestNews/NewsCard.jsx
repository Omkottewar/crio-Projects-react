import React from 'react'
import { detox, rebecca } from '../../assets'
import './NewsCard.css'
const NewsCard = () => {
  return (
    <div className='newsCard'>
        <img className='' src={detox} alt="" />
        <div className="">
            <span className='flex gap-2'><p>Medical</p>|<p>March 31, 2022</p></span>
            <p className='text-[#1B3C74] text-lg font-medium ;
'>6 Tips To Protect Your Mental Health When You're Sick</p>
            <span className='flex'><img src={rebecca} alt="" /><p>Rebecca Lee</p></span>
        </div>
    </div>
  )
}

export default NewsCard