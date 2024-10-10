import { useState } from 'react';
import './index.css';

function App() {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    const input = e.target.value;

    setValue(String(value + input));
  };

  const handleReset = () => {
    setValue("");
  };

  const handleEqual = () => {
    if (value.trim() === "") {
      setValue("Error");
      return;
    }
  
    try {
      const result = new Function('return ' + value)();
      setValue(result.toString());
    } catch (error) {
      setValue("Error");
    }
  };
  

  return (
    <div className=" mx-auto w-full  p-10">
      <div>
      
        <form className="flex flex-col items-center gap-5">
        <h1 className='text-3xl font-bold'>React Calculator</h1>
          <div>
            <input 
              type="text" 
              value={value} 
              readOnly 
              className="bg-white border text-black p-2" 
            />
          </div>

          <div className="btn__row flex gap-2">
            <button type="button" value="7" onClick={handleClick}>7</button>
            <button type="button" value="8" onClick={handleClick}>8</button>
            <button type="button" value="9" onClick={handleClick}>9</button>
            <button type="button" value="+" onClick={handleClick}>+</button>
          </div>
          <div className="btn__row flex gap-2">
            <button type="button" value="4" onClick={handleClick}>4</button>
            <button type="button" value="5" onClick={handleClick}>5</button>
            <button type="button" value="6" onClick={handleClick}>6</button>
            <button type="button" value="-" onClick={handleClick}>-</button>
          </div>
          <div className="btn__row flex gap-2">
            <button type="button" value="1" onClick={handleClick}>1</button>
            <button type="button" value="2" onClick={handleClick}>2</button>
            <button type="button" value="3" onClick={handleClick}>3</button>
            <button type="button" value="*" onClick={handleClick}>*</button>
          </div>
          <div className="btn__row flex gap-2">
            <button type="button" value="C" onClick={handleReset}>C</button>
            <button type="button" value="0" onClick={handleClick}>0</button>
            <button type="button" value="=" onClick={handleEqual}>=</button>
            <button type="button" value="/" onClick={handleClick}>/</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
