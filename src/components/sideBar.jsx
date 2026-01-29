import "./Sidebar.css";

function Sidebar({title, menuitems}) {
    return(
        <div className="sidebar">
            <h2>{title}</h2>

            <ul>
                {menuitems.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;