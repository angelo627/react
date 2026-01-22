import { useState } from "react";

function ShowLists() {
    const names = ['angel', 'best','fish','goat'];
    const [show, setShow] = useState(true);

    return (
        <div>
            <button onClick={()=>setShow(!show)}>
                toggle list
            </button>
            {show && 
            <ul>
                {names.map((names,index)=>(
                    <li key={index}>
                        {names}
                    </li>
                ))}
            </ul>
            }
        </div>
    );
}

export default ShowLists;