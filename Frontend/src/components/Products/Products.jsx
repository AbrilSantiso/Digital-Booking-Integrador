import ButtonClearFilter from '../ButtonClearFilter/ButtonClearFilter';
import Product from "./Product"
import "./Products.css";

function Products(props) {
  const { products, error, clearFilters } = props;

  return (
    <div id="block-products-container">
      <section className="product-title-button-filter">
        <h2 className="product-title">Recomendaciones</h2>
        <ButtonClearFilter clearFilters={clearFilters} />
      </section>

      <div className="products">
        {!error ? products.map((product) => (
          <Product product={product} />
        )) : (
          <p>{error}</p>
        )}
      </div>
    </div>
  )
}

export default Products;
