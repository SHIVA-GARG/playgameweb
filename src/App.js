// import Carasoul from './components/CarasoulPart/Carasoul';
import Carasoul from './components/CarasoulPart/Carasoul.jsx'
import Footer from './components/footer/Footer.jsx';
import Middlepart from './components/middlePart/Middlepart.jsx';
import Topbar from './components/Topbar/Topbar.jsx';
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