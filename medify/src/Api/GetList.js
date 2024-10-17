import axios from "axios";

const GetList = async (selectedState, city, setHospitalList) => {
  try {
    const res = await axios.get(
      `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${city}`
    );
    setHospitalList(await res.data);  // Pass the fetched data to the context
  } catch (e) {
    console.log(e);
  }
};

export default GetList;
