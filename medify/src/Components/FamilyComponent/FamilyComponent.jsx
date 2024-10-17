import React from 'react';
import './FamilyComponent.css';
import { heart, labs, expert, hospitals } from '../../assets';
import FamilyCard from './FamilyCard';

const FamilyComponent = () => {
  const cards = [
    {
      text: "Happy Patients",
      numbers: "5000+",
      image: heart,
    },
    {
      text: "Hospitals",
      numbers: "200+",
      image: hospitals,
    },
    {
      text: "Laboratories",
      numbers: "1000+",
      image: labs,
    },
    {
      text: "Expert Doctors",
      numbers: "700+",
      image: expert,
    },
  ];

  return (
    <div className='family-component'>
      <div className='family-component-description'>
        <p className='family-component-title'>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
        <p className='family-component-subtitle'>Our Families</p>
        <p className='family-component-text'>
          We will work with you to develop individualized care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all inquiries sensitively and in the strictest confidence.
        </p>
      </div>
      <div className='family-component-cards'>
           <div className="">
           <FamilyCard  item={cards[0]} key={cards[0].name} />
           <FamilyCard  item={cards[1]} key={cards[0].name} />
           </div>
           <div className="relative top-20">
           <FamilyCard  item={cards[2]} key={cards[0].name} />
           <FamilyCard  item={cards[3]} key={cards[0].name} />
           </div>

      </div>
    </div>
  );
};

export default FamilyComponent;
