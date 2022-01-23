import './Middlepart.css';
import Card from './card/Card'
// import {} from '../middlePart/card/Card'

function Middlepart() {
  return <div className='middlepart'>
      <div className="featuredPools">
          <p>FEATURED POOLS</p>
          <hr/>
          {/* <Card/> */}
          <Card/>
      </div>
  </div>;
}

export default Middlepart;
