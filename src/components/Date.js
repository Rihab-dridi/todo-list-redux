import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className="date">
            <p style={{color:"grey"}}> {date.toLocaleTimeString()}</p>
            <p style={{color:"grey", fontSize:"60px"}}> {date.toLocaleDateString()}</p>
        </div>
    )
}

export default DateTime

