import React, {useEffect, useRef, useState} from 'react'

const TimerCounter = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1)
        }, 1000);
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
    return (
        <div>
            <h3>Timer: {count} seconds</h3>
            <button onClick={() => clearInterval(intervalRef.current)}>stop</button>
        </div>
    )
}
export default TimerCounter
