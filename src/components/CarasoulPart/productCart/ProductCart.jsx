import { ChevronRight } from '@mui/icons-material';
import './ProductCart.css';

function ProductCart({ h1, span, p }) {
  return (<div className='mainCard'><div className='productCard'>
    <h6>{h1} <span>{span}</span></h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deleniti tempora dignissimos nostrum nihil molestiae sunt placeat dolorum eveniet ducimus veniam, tenetur eos quasi aliquid consequatur aliquam at ipsam consectetur!
      Itaque ducimus</p>
    <a href='#1'>load more
      <ChevronRight className="icon" htmlColor='white' />
    </a>
  </div>;  </div>)
}

export default ProductCart;
