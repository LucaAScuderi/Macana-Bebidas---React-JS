import React, { useEffect, useState } from 'react'

export const Clock = () => {
    
    const [time, setTime] = useState(new Date())
    
    
    useEffect( () => {
       
        setTimeout(()=>{
            setTime(new Date())
        }, 1000)

    }, [time])

    


    return (
        <div>
            <h3>{time.toLocaleString()}</h3>
        </div>
    )
}
