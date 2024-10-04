import React, { useEffect, useState } from "react";
import axios from 'axios'



const getData= ()=>{
    const [flags,setFlags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchData =  async()=>{
        try{
            const res = await axios.get('https://xcountries-backend.azurewebsites.net/all');
            setFlags(res.data);
            setLoading(false)
        }
        catch(e){
            console.log("fetchData error",e)
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

    return {flags,loading};

}







export default getData