import React, { useContext, useState } from "react";
import "./SearchDoctor.css";
import { search } from "../../assets";
import { HospitalContext } from "../../Context/Contexts";
import useCityData from "../../Api/Api";  // Custom hook for fetching city data
import GetList from "../../Api/GetList";
import { Link } from "react-router-dom";

const SearchDoctor = () => {
  const allStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "DC", "Florida", "Georgia", "Hawaii", "Idaho",
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
    "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "PR", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
    "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin",
    "VI", "Wyoming", "AS", "GU", "MP"
  ];

  const [selectedState, setSelectedState] = useState("");  // State for the selected state
  const { cityData, loading, error } = useCityData(selectedState);  // Fetch cities based on state
  const { setHospitalList,HospitalList } = useContext(HospitalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const selectedCity = e.target.elements.cities.value; 
    
    if (selectedState && selectedCity) {
    GetList(selectedState, selectedCity,setHospitalList);  // Fetch hospital list based on state and city
    } else {
      console.log("Please select both state and city.");
    }
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);  // Update selected state and trigger city data fetch
  };

  return (
    <div className="search-doctors">
      <form onSubmit={handleSubmit} className=" search-doctors-form flex gap-5">
        <select
          name="states"
          id="states"
          onChange={handleStateChange}
          required
          className="w-96 border border-gray-300 px-5 rounded-lg"
        >
          <option value="" disabled >Select State</option>
          {allStates?.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
        <select name="cities" id="cities" disabled={!cityData.length} className="w-96 border border-gray-300 px-5 rounded-lg">
          <option value="" disabled >Select City</option>
          {loading ? (
            <option>Loading cities...</option>
          ) : (
            cityData?.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))
          )}
        </select>

        {/* Search button */}
       <button type="submit" className="search-area__button ">
         <Link to='/finddoctors' className="flex gap-5">
         <img src={search} alt="Search Icon" />
         Search</Link>
        </button>
      </form>

      {/* Error message */}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SearchDoctor;

