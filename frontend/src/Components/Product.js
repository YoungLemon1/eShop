import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function Product({ product }) {
  return (
    <Card key={product.token} className="product">
      <Link to={`/product/${product.token}`}>
        <img className="card-img-top" alt={product.name} src={product.image} />
      </Link>

      <Card.Body>
        <div className="productDesc">
          <p>{product.name}</p>
          <p>
            <strong>{product.price}</strong>$
          </p>
          <p>{product.description}</p>
          <Link to={`/product/${product.token}`}>
            <button>Add To Cart</button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Product;
