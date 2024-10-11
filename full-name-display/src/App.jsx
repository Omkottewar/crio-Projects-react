import React, { useState } from 'react';

function SimpleForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: ''
  });

  const [showData, setShowData] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData({...formData})
  };

  return (
    <div className='ml-10'>
      <h2 className='text-2xl font-bold mb-5'>Full Name Display</h2>
      <form onSubmit={handleSubmit}>
        <div className='flex gap-2 items-center'>
          <label htmlFor="firstname">First Name: </label><br />
          <input
          className='border border-black rounded-md py-1 px-2' 
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className='flex gap-2 items-center'>
          <label htmlFor="lastname">Last Name:</label><br />
          <input
           className='border border-black rounded-md py-1 px-2' 
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <button className='bg-gray-400 px-2 py-1 rounded-md border border-black ' type="submit">Submit</button>
     
        {showData?  <div className="mt-5 text-xl">Full Name:  {showData.firstname} {showData.lastname}</div>:null}
      </form>
    </div>
  );
}

export default SimpleForm;
