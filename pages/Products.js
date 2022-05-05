import products from 'data';
import Product from 'components/Product';

const Products = () => {
  return (
    <section className='section'>
      <h2>Products</h2>
      <div className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default Products;
