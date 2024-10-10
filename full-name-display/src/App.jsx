import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

function App() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handlefirstName = (e) => {
    setFirstName(e.target.value);
    setIsSubmit(false)
  };

  const handlelastName = (e) => {
    setLastName(e.target.value);
    setIsSubmit(false)
  };

  const handlesubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    setIsSubmit(true); // Set submit state to true
  };

  return (
    <div className="">
      <form onSubmit={handlesubmit} className="flex flex-col text-3xl">
        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            name="firstName"
            onChange={handlefirstName}
            value={firstName}
            id="firstName"
            required
          />
        </label>

        <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handlelastName}
            value={lastName}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="mt-4">
        {isSubmit && <span>{firstName} {lastName}</span>}
      </div>
    </div>
  );
}

export default App;
