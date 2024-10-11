import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [value,setValue] = useState(0)

  const handleIncrement =()=>
    {
      setValue(value+1);
    } 
    const handleDecrement =()=>
      {
        setValue(value-1);
      }
      
  return (
    <div className="">
      <h1>Counter App</h1>

      <p>Count: {value}</p>


    <button className='px-1 py-0.5 border border-black bg-gray-300 rounded-md  ml-2' onClick={handleIncrement}> Increment </button>
    <button className='px-1 py-0.5 border border-black bg-gray-300 rounded-md  ml-2' onClick={handleDecrement}>Decrement</button>
    
    </div>
  )
}

export default App
