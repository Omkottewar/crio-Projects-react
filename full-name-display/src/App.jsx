import { useState } from "react";
import "./index.css";

function App() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handlefirstName = (e) => {
    setFirstName(e.target.value);
    setIsSubmit(false);
  };

  const handlelastName = (e) => {
    setLastName(e.target.value);
    console.log(typeof e.target.value);
    setIsSubmit(false);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold">Full Name Display</h1>
      <form onSubmit={handlesubmit} className="flex flex-col gap-5">
        <label htmlFor="firstName">
          First Name:
          <input
            type="char"
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
        <button
          type="submit"
          className=" w-24 rounded-sm border border-black bg-gray-300"
        >
          Submit
        </button>
      </form>
      <p className="mt-4">
        {isSubmit && (
            <span>Full Name : {firstName} {lastName}</span>
        )}
      </p>
    </div>
  );
}

export default App;
