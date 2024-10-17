import React from "react";
import "./SlotPannel.css";

const SlotPannel = ({slotClicked}) => {
  const Timings = ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM","13:00 PM", "13:30 PM", "14:00 PM", "14:30 PM", "15:00 PM","18:00 PM", "18:30 PM", "19:00 PM", "19:30 PM", "20:00 PM"];

    const showPannel =(start,end)=>
    {
       return(
        Timings.slice(start,end).map((slot,index)=>{
            return(
                <button key={index} className="slot-btn" onClick={()=>slotClicked(slot)}>{slot}</button>
            )
        })
       )
    }


  return <div className="flex flex-col ">
    <div className="flex justify-between items-center">Morning:    {showPannel(0,5)}</div>
    <div className="flex justify-between items-center"> <span className="mr-5">Noon: </span>{ showPannel(5,10)}</div>
    <div className="flex justify-between items-center"><span className="mr-2">Evening:</span> {showPannel(10,16)}</div>
    
    
    
  </div>;
};

export default SlotPannel;
