import { useState } from "react";

function ToggleMessage() {
    const [show, setShow] = useState(true);

    return (
        <div>
      {show && <p>This message is visible</p>}
      <button onClick={() => setShow(!show)}>
        Toggle Message
      </button>
    </div>
    );
}

export default ToggleMessage