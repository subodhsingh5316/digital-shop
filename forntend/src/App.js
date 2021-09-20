import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Component/Footer';
import Header from './Component/Header';
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';
import CartScreen from './Screen/CartScreen';
import Signin from './Authentication/Signin';
import Signup from './Authentication/Signup';
import ShippingScreen from './Screen/ShippingScreen';
// import Student from './Component/Student';
import CarouselScreen from "./Screen/CarouselScreen"

function App() {
  return (
    <Router>
      <Header />
      {/* <CarouselScreen/> */}
      <main className='py-3'>
        <Container>
          <Route exact path='.shipping' component={ShippingScreen}/>
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signin' component={Signup} />  
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/cart/:id?' component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
