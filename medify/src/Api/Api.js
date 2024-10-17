import { useState, useEffect } from 'react';
import axios from 'axios';

const useCityData = (state) => {
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!state) return;  // Don't fetch if state is not provided

    const fetchCityData = async () => {
      setLoading(true);  // Start loading
      try {
        const res = await axios.get(`https://meddata-backend.onrender.com/cities/${state}`);
        setCityData(res.data);  // Update the city data
        setError(null);  // Clear any previous errors
      } catch (e) {
        setError('Failed to fetch city data');  // Handle errors
      } finally {
        setLoading(false);  // Stop loading
      }
    };

    fetchCityData();
  }, [state]);  // Trigger the effect whenever `state` changes

  return { cityData, loading, error };
};

export default useCityData;
