import React from 'react'
import { Carousel } from 'react-bootstrap'

const CarouselScreen = () => {
    return (
        <div >
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators" indicator={false}>
                    {/* <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li> */}
                </ol>
                <div className="carousel-inner"  >
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="/images/airpods.jpg" alt="airpods"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/images/phone.jpg" alt="phone"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/images/camera.jpg" alt="cannon"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="false" style={{ backgroundColor: 'grey',width:"40px",height:"40px",borderRadius:"40px" }}></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon " aria-hidden="false" style={{ backgroundColor: 'grey',width:"40px",height:"40px",borderRadius:"40px" }}></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            {/* <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/airpods.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/phone.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/airpods.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        </div>
    )
}

export default CarouselScreen
