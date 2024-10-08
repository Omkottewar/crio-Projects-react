import React from 'react';
import leftArrow from '../../assets/leftArrow.svg';
import rightArrow from '../../assets/rightArrow.svg';
import './RecentTransactions.css';

const Pagination = ({ pages, updatePage }) => {
  return (
    <div className='btn__container'>
      <button
        onClick={() => updatePage('left')}
        className='direction__btn'
      >
        <img src={leftArrow} alt="Left Arrow" />
      </button>
      <button
        className='direction__btn page__btn'
      >
        {pages.currentPage}
      </button>
      <button
        onClick={() => updatePage('right')}
        className='direction__btn'
      >
        <img src={rightArrow} alt="Right Arrow" />
      </button>
    </div>
  );
};

export default Pagination;
