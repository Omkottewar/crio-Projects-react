import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card/Card';
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);  
  const [filteredCountries, setFilteredCountries] = useState([]); 
  const [searchInput, setSearchInput] = useState(''); 

  const fetchData = async () => {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(res.data);  
      setFilteredCountries(res.data);  
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();  
  }, []);

  const handleSearch = (event) => {
    const input = event.target.value.toLowerCase(); 
    setSearchInput(input);


    const filtered = countries.filter(item => 
      item.name.common.toLowerCase().includes(input) 
    );

    setFilteredCountries(filtered); 
  };

  return (
    <div className="">
      <input 
        type="text" 
        value={searchInput} 
        onChange={handleSearch} 
        placeholder="Search for a country..." 
      />
      <div className="countryCard">
        {
          filteredCountries.map((item, index) => {
            return <Card data={item} key={index} />;
          })
        }
      </div>
    </div>
  );
}

export default App;
