import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className="w-screen">
<Home/>
</div>
  )
}

export default App
