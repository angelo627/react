import { useState } from "react";

function PersonalCounter ({name ,color}) {

    const [count , setCount] = useState(0);

    return (
     <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
     <h3>{name}'s Counter</h3>
     <p style={{ color: color }}>Count: {count}</p> 
     {/* <p>Count: {count}</p> */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
     </div>
    );
}

export default PersonalCounter;