import { useState } from "react";

function ClickCounter() {

    const [ clicks , setClicks ] = useState(0)
     
    const handleClick = () =>{
        setClicks(clicks+1)
    };

    return (
    <div>
      <p>You clicked {clicks} times</p>
      <button onClick={handleClick}>Click Me!</button>
      </div>
    );
}

export default ClickCounter