import React, { useState } from "react";
import NavBarButton from "./NavBarButton"; // Component renamed to PascalCase
import logo from "../../assets/logo.svg";
import "./Navbar.css";
import { hamburger } from "../../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const buttonsArray = [
    "Find Doctors",
    "Hospitals",
    "Medicines",
    "Surgeries",
    "Software for Providers",
    "Facilities",
    "My Bookings",
  ];

  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/">
          {" "}
          <div className="navbar__logo-container ">
            <img className="navbar__logo-image" src={logo} alt="Medify logo" />
            <p className="navbar__logo-text">Medify</p>
          </div>
        </Link>
        <div className="navbar__menu">
          <NavBarButton text="Menu" click={() => setShowMenu(!showMenu)} />
          <div
            className={`navbar__menu-container ${showMenu ? " w-screen " : ""}`}
          >
            {showMenu
              ? buttonsArray.map((item, index) => (
                  <NavBarButton key={index} className="w-screen" text={item} />
                ))
              : null}
          </div>
        </div>
        <div className="navbar__buttons-container">
          {buttonsArray.map((item, index) => {
            if (item === "My Bookings") {
              return (
                <Link to="/booking" key={index}>
                  <NavBarButton text={item} />
                </Link>
              );
            }
            else if (item === "Find Doctors") {
                return(
                    <Link to="/finddoctors" key={index}>
                    <NavBarButton text={item} />
                  </Link>
                )
            }
            return <NavBarButton key={index} text={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
