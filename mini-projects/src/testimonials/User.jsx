import { useState } from "react"


export default function User(){
    const [count, setCount] = useState(0);
    if(count > 0) {
        setCount(count)
    }
    const handleChange = (e) => {
        e.preventDefault();
        
    }
    return(
        <div>
            <h2>hi there</h2>
            <main>
                <form action="">
                    <label htmlFor="title">
                        <input type="text" onChange={handleChange}/>
                    </label>
                </form>
            </main>
        </div>
    )
}