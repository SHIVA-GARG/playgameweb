
import './App.css';
import Carasoul from './components/CarasoulPart/Carasoul';
import Middlepart from './components/middlePart/Middlepart';

import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Carasoul/>
      <Middlepart/>
    </div>
  );
}

export default App;
