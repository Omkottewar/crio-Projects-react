import React from 'react'
import NavBar__button from './NavBar__button'
import logo from '../../assets/logo.svg'
import "./Navbar.css"

const Navbar = () => {
    const buttonsArray=["Find Doctors","Hospitals" , "Medicines" , "Surgeries", "Software for Providers" , "Facilities", "My Bookings"]
  return (
    <div className=''>
        <div className="navbar__body flex items-center  justify-between">
            <div className="navbar__logo flex gap-2">
                <img className="navbar__image" src={logo} alt="" />
                <p className='navbar__logoText'>Medify</p>
            </div>
            <div className="navbar__menu"><NavBar__button text="Menu" /></div>
            <div className="navbar__buttons  flex justify-between">
                {buttonsArray.map((item,index)=>{
                    return (
                        <NavBar__button key={index} text={item} />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Navbar