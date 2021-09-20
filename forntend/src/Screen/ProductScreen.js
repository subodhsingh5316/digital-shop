import React, { useState, useEffect } from "react";
import { Link,useParams,useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, ListGroup, Image, Form } from "react-bootstrap";
import Rating from "../Component/Rating";
import { listProductsDetails} from '../Action/productAction'
import Loader from "../Component/Loader";
import Message from "../Component/Message";

function ProductScreen() {
   const history= useHistory()
  // const [product, setProduct] = useState([]);
  const [qty, setQty] = useState(1)
  const {id} = useParams()

  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product} = productDetails
console.log(productDetails);
  useEffect(() => {
    dispatch(listProductsDetails(id))
   

  }, [ dispatch,id]);

  const addToCartHandler =() => {
    history.push(`/cart/${id} ? qty=${qty}`)
    console.log(id,qty)
  }
  return (
    <React.Fragment>
      <Link className="btn-btn-light my-3" to="/">
        Go Back
      </Link>
      { loading ? (
        <Loader />
        ): error ? (
          <Message variant='danger'>{error} </Message>
          ):(
        <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name} </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color="#f8e825"
              />
            </ListGroup.Item>
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description : ${product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status</Col>
                <Col>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </Col>
              </Row>
            </ListGroup.Item>
            {product.countInStock > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col>Qty</Col>
                  <Col>
                  <Form.Control as ='select'  value={qty} onChange = { (e) =>
                     setQty (e.target.value)} >
                     {
                     [...Array(product.countInStock).keys()].map((x) => (
                       <option key={x + 1} value={ x + 1 }>
                          {x + 1}
                       </option>
                     ))
                     }
                     </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
            )}
            <ListGroup.Item>
              <Button
                onClick = {addToCartHandler}
                className="btn-block"
                variant="dark"
                type="button"
                disabled={product.countInStock === 0}
              >
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      )

      }
      
    </React.Fragment>
  );
}

export default ProductScreen;
