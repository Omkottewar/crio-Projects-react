import { useState } from 'react'
import './index.css'
import Flags from './Components/Flags'
import getData from './Api/FlagsData'


function App() {

  const {flags,loading} = getData()
  return (
   <div className="w-full h-full ml-10 ">
    <h1 className='font-bold mb-10 text-3xl '>List of Countries With their Flags</h1>
 <div className="flex flex-wrap gap-3">
 {flags?.map((card,index)=>{
    return (
      <Flags key={index} data={card} />
    )
  })}
 </div>
   </div>
  )
}

export default App
