import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row,Col } from 'react-bootstrap'
import {Link, Redirect,useHistory} from "react-router-dom"
import Message from '../Component/Message';
import Loader from '../Component/Loader';
import {login} from '../Action/userAction'

const Signin = ({props,handleClose,isSignUp,setIsSignUp,location}) => {
     const [email, setEmail]=useState("")
     const [password,setPassword]=useState("")
     const dispatch = useDispatch()
     const userLogin = useSelector(state => state.userLogin)
     const {loading,error, userInfo} = userLogin
     let history = useHistory()

    //  const redirect=location.search ? location.search.split('=')[1] : '/'

     useEffect (() => {
         if(userInfo){
             history.push('/')
         }
     },[history,userInfo])

     const submitHandlar=(e)=>{
        e.preventDefault()
        dispatch(login(email,password))
        handleClose()
    }
    return (
        <div>
            <Form onSubmit={submitHandlar} className='my-5 px-5'>
            {error && <Message variant='danger'>{error}</Message>}
            {loading &&<Loader/>}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {/* <Form.Check type="checkbox" label="Check me out" /> */}
                    <p  onClick={()=>setIsSignUp (!isSignUp)} >New user Click Here</p>
                    {/* {redirect ? `/signup?redirect=${redirect}`:'/signup'}   */}
                </Form.Group>
                <Button variant="primary" type="submit">
                           Submit
                 </Button>    
            </Form>
        </div>
    )
}

export default Signin
