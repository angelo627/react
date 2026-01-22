import { useState } from "react";

function NameForm() {

    const [name , setName] = useState("");

    const handlesubmit = (e) =>{
        e.preventDefault();
        alert(`hello! ${name}`)
    }

    return (
        <form onSubmit={handlesubmit}>
            <input 
             type="text"
             value={name}
             onChange={(e)=>setName(e.target.value)}
             placeholder="enter your name"
            />
            <button type="submit">
                greet
            </button>
        </form>
    );
}

export default NameForm;