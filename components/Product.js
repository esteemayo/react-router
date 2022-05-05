import { Link } from 'react-router-dom';

const Product = ({ id, name }) => {
  return (
    <article>
      <h5>{name}</h5>
      <Link to={`/products/${id}`}>More info</Link>
    </article>
  );
};

export default Product;
