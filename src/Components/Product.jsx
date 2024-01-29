import { Card } from "react-bootstrap";
const Product = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </a>
        <Card.Body>
            <Card.Title as="h2">{product.name}</Card.Title>

        </Card.Body>

        
      </Card>
    </>
  );
};

export default Product;
