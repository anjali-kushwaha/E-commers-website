import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
  // Check if products is undefined or products.data is undefined
  if (!products || !products.data) {
    return null; // Or you can return a loading indicator or an error message
  }

  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products.data.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            data={item.attributes}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
