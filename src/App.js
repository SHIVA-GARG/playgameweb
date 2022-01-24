// import Carasoul from './components/CarasoulPart/Carasoul';
import Carasoul from './components/CarasoulPart/Carasoul'
import Footer from './components/footer/Footer';
import Middlepart from './components/middlePart/Middlepart';
import Topbar from './components/Topbar/Topbar';
import "./App.css";
// import ProductDesign from './components/CarasoulPart/productDesign/ProductDesign'

function App() {
    return (<div>
        {/* <ProductDesign/> */}

        <div style={
            { display: "block", margin: "auto", width: "90%" }
        } >
            <Topbar />

            <Carasoul />
            <Middlepart />
        </div>  <div style={
            { display: "block", margin: "auto", width: "90%", marginTop: "3rem" }
        } >
            < Footer />
        </div>

    </div>
    );
}

export default App;