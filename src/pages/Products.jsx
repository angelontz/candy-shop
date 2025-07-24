import products from '../data/Products';
import ProductCard from '../components/ProductCard';

function Products() {
  return (
    <div className="products-page">
      <h1>All Candies</h1>
      <div className="product-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
