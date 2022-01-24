import Carasoul from './components/CarasoulPart/Carasoul';
import Footer from './components/footer/Footer';
import Middlepart from './components/middlePart/Middlepart';
import Topbar from './components/Topbar/Topbar';
import "./App.css";

function App() {
  return (
    <div>
      <main>
      <Topbar/>
      <Carasoul/>
      <Middlepart/>
      </main>
      <Footer />
      
    </div>
  );
}

export default App;
