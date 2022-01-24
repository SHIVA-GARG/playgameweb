// import Carasoul from './components/CarasoulPart/Carasoul';
import Carasoul from './components/CarasoulPart/Carasoul'
import Footer from './components/footer/Footer';
import Middlepart from './components/middlePart/Middlepart';
import './App.css'
import Topbar from './components/Topbar/Topbar';
// import second from './Assets/img/img2.png';
;


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
