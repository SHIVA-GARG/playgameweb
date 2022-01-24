// import Carasoul from './components/CarasoulPart/Carasoul';
import Carasoul from './components/CarasoulPart/Carasoul'
import Footer from './components/footer/Footer';
import Middlepart from './components/middlePart/Middlepart';
import './App.css'
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div>
      <Topbar/>
      <Carasoul/>
      <Middlepart/>
      <Footer />
    </div>
  );
}

export default App;
