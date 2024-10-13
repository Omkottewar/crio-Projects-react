import React from 'react'
import { familyImg, smily } from '../../assets'
import "./FrequentQuestions.css"

const FrequentQuestions = () => {
  return (
    <div className='frequentQuestions'>
        <p>Get Your Answer</p>
        <p>Frequently Asked Questions</p>
        <div className="flex justify-center items-center">
        <div className="">
            <img src={familyImg} alt="" />
            <img src={smily} alt="" />
        </div>
        <div className="">
            <div className="span">Why choose our medical for your family?</div>
            <div className="span">Why we are different from others?</div>
            <div className="span">Trusted & experience senior care & love</div>
            <div className="span">How to get appointment for emergency</div>
        </div>
        </div>
     
    </div>
  )
}

export default FrequentQuestions