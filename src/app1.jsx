// import './app1.css'
import Greeting from './Greeting.jsx';
import Info from './Info.jsx';
import AngeloInfo from './Agelo.jsx';
import Counter from './Counter.jsx';
import PersonalCounter from './PersonalCounter.jsx';
import ClickCounter from './ClickCounter';

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
    <div>
      <h1>Hello Angelo 👋</h1>
      <ClickCounter />
    </div>
  );
}

export default App;
