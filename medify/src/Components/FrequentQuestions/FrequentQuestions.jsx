import React from 'react';
import { familyImg, plus, smily } from '../../assets';
import './FrequentQuestions.css';

const FrequentQuestions = () => {
  return (
    <div className='frequent-questions'>
      <p className='questions-heading'>Get Your Answer</p>
      <p className='questions-subheading'>Frequently Asked Questions</p>
      <div className="questions-content">
        <div className="questions-images">
          <img className='family-image' src={familyImg} alt="Family" />
          <img className='smiley-image' src={smily} alt="Smiley" />
        </div>
        <div className="questions-list">
          <div className="question-item">Why choose our medical for your family?<img src={plus}/></div>
          <div className="question-item">Why we are different from others?<img src={plus}/></div>
          <div className="question-item">Trusted & experience senior care & love<img src={plus}/></div>
          <div className="question-item">How to get appointment for emergency<img src={plus}/></div>
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestions;
