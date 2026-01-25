// import './app1.css'
import Greeting from './Greeting.jsx';
import Info from './Info.jsx';
import AngeloInfo from './Agelo.jsx';
import Counter from './Counter.jsx';
import PersonalCounter from './PersonalCounter.jsx';
import ClickCounter from './ClickCounter';
import ToggleMessage from './ToggleMessage.jsx';
import ShowLists from './ShowName.jsx';
import NameForm from './NameForm.jsx';
import Timer from './timer.jsx';
import Posts from './Posts.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import  Home  from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Services from './pages/services.jsx';

function App() {
   return (
    // <div>
    //   <Greeting />
    //   <Info />
    //   <AngeloInfo coding = 'is peak' />
    //   <AngeloInfo coding = 'is magnificent' />
    //   <AngeloInfo coding = 'is carering' />
    //   < Counter />
    // </div>,
    // <div>
    //   <h1>Hello Angelo 👋</h1>
    //   <PersonalCounter name="Angelo" color="blue" />
    //   <PersonalCounter name="Maria"  color="green"/>
    // </div>
    // <div>
    //   <h1>Hello Angelo 👋</h1>
    //   <ClickCounter />
    // </div>

    // <div>
    //   <ToggleMessage />
    // </div>

    // <div>
    //   <ShowLists/>
    // </div>

    // <div>
    //   <h1>forms in react</h1>
    //   <NameForm/>
    // </div>

    // <div>
    //   <Timer/>
    // </div>

    // <div>
    //   <h1>Hello Angelo 👋</h1>
    //   <Posts />
    // </div>

    <BrowserRouter>
      <div>
        <nav>
        <Link to="/Home">home😁</Link> |
        <Link to="/About">about</Link> |
        <Link to="/Contact">contact</Link> |
        <Link to="/services">services</Link>
       </nav>
      

       <Routes>
        <Route path="/Home" element={<Home />} /> 
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/services" element={<Services/>}/>
       </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
