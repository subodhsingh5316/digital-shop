import React, { useState } from "react";
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar, Modal, Button, NavDropdown, InputGroup, FormControl } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import { logout } from "../Action/userAction"
function Header({ props }) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [isSignIn, isSetSignIn] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const useLogin = useSelector(state => state.userLogin)
  const { userInfo } = useLogin
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const logoutHandlar = () => {
    dispatch(logout())
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Bhumico</Navbar.Brand>
          </LinkContainer>
          <Nav>
            <InputGroup>
              <FormControl
                style={{width:'300px',marginLeft:'500px'}}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            <InputGroup.Text id="basic-addon1" type='button'><i class="fas fa-search"></i></InputGroup.Text>
            </InputGroup>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href='/cart/:id?'><i className="fas fa-shopping-cart "></i> Cart{cartItems.reduce((acc,item) => acc+item.qty,0)} </Nav.Link>
            {
              userInfo ? (
                <NavDropdown title={userInfo.name}>
                  <NavDropdown.Item onClick={logoutHandlar}>Logout</NavDropdown.Item>
                  {console.log(userInfo)}
                </NavDropdown>
              ) : (
                <LinkContainer to='' onClick={handleShow}>
                  <Nav.Link><i className="fas fa-user"></i> SIGNIN</Nav.Link>
                </LinkContainer>
              )
            }
          </Nav>
        </Container>
      </Navbar>
      <Modal centered show={show} onHide={handleClose}>
        {/* <Link onClick={handleClose} variant='light' className=' 'style={{marginLeft:'90%' ,marginRight:"10px", width:'20px',marginBottom:'-20px' }} Link><i class="fas fa-times my-2 "></i></Link> */}
        {
          isSignUp
            ? (
              <Signin isSignUp={isSignUp} setIsSignUp={setIsSignUp} handleClose={handleClose} />
            ) : (

              <Signup isSignUp={isSignUp} setIsSignUp={setIsSignUp} handleClose={handleClose} />
            )
        }
      </Modal>
    </div>
  );
}

export default Header;