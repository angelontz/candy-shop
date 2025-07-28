import products from '../data/Products';
import ProductCard from '../components/ProductCard';
import { useLocation } from 'react-router-dom';

function Products() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  const subcategory = searchParams.get('subcategory');

  const filteredProducts = products.filter((item) => {
    if (subcategory) {
      return item.subcategory === subcategory && item.category === category;
    }
    if (category) {
      return item.category === category;
    }
    return true;
  });

  const title = subcategory || category || 'All Candies';

  return (
    <div className="products-page">
      <h1>{title}</h1>
      <div className="product-grid">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
