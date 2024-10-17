import React from 'react';
import { detox, rebecca } from '../../assets';
import './NewsCard.css';

const NewsCard = () => {
  return (
    <div className='news-card'>
      <img className='news-card-image' src={detox} alt="Detox" />
      <div className='news-card-content'>
        <span className='news-card-category-date'>
          <p className='news-card-category'>Medical</p> | <p className='news-card-date'>March 31, 2022</p>
        </span>
        <p className='news-card-title'>6 Tips To Protect Your Mental Health When You're Sick</p>
        <span className='news-card-author'>
          <img className='news-card-author-image' src={rebecca} alt="Rebecca Lee" />
          <p className='news-card-author-name'>Rebecca Lee</p>
        </span>
      </div>
    </div>
  );
}

export default NewsCard;
