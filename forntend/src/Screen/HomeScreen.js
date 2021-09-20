import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from "react-bootstrap";
import Message from "../Component/Message";
import Loader from "../Component/Loader";
import Product from "../Component/Product";
import { listProducts } from '../Action/productAction'
import CarouselScreen from "./CarouselScreen";
function HomeScreen() {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())

    }, [dispatch])

    return (
        <React.Fragment>
            <h1>Latest product</h1>
            {/* <CarouselScreen/> */}
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    {products.map((product) => (
                        <Col key={product.id} sm={12} md={6} lg={4} xl={3} >
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            )}

        </React.Fragment>
    );
}

export default HomeScreen;