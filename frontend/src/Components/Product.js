import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function Product({ prod }) {
  return (
    <Card key={prod.token} className="product">
      <Link to={`/product/${prod.token}`}>
        <img className="card-img-top" alt={prod.name} src={prod.image} />
      </Link>

      <Card.Body>
        <div className="productDesc">
          <p>{prod.name}</p>
          <p>
            <strong>{prod.price}</strong>$
          </p>
          <p>{prod.description}</p>
          <Link to={`/product/${prod.token}`}>
            <button>Add To Cart</button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Product;
