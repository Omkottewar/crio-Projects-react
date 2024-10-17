import React from 'react';
import { hamburger } from '../../assets';

const NavBarButton = ({ text, click, className }) => {
  return (
    <button
      onClick={click}
      className={`p-[5px] rounded-lg hover:bg-[#2AA8FF] hover:text-white hover:font-medium text-[14px] my-auto cursor-pointer ${className}`}
    >
      {text.toLowerCase() === "menu" ? (
        <img className='w-[30px] h-[30px] p-0.5 bg-[#2AA8FF] rounded-md' src={hamburger} alt="Menu" />
      ) : (
        text
      )}
    </button>
  );
};

export default NavBarButton;
