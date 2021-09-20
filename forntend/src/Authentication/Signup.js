import React, { useState, useEffect} from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import {Link, Redirect,useHistory} from "react-router-dom"
import Message from '../Component/Message';
import Loader from '../Component/Loader';
import {signUP} from '../Action/userAction'

const Signup = ({props,handleClose,isSignUp,setIsSignUp}) => {
    const [name,setName] =useState("")
    const [cPassword,setCPassword] =useState("")
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const [message,setMessage] = useState(null)


    const dispatch = useDispatch()
     const userSignUp = useSelector(state => state.userSignUp)
     const {loading,error, userInfo} = userSignUp
     let history = useHistory()

    //  const redirect=location.search ? location.search.split('=')[1] : '/'

     useEffect (() => {
         if(userInfo){
             history.push('/')
         }
     },[history,userInfo])


     const submitHandlar=(e)=>{
        e.preventDefault()
        if(password !== cPassword){
            setMessage("Password do not match")
        }else{
            dispatch(signUP(name,email,password))
            handleClose()
        }
    }
    return (
        <div>
            <Form onSubmit={submitHandlar} className='my-5 px-5'>
            {message && <Message variant='danger'>{message}</Message>}
            {loading &&<Loader/>}
            <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />
                </Form.Group>
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
                <Form.Group className="mb-3" controlId="formBasicCPassword" >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="cpassword" placeholder="Enter Confirm Password" value={cPassword} onChange={(e)=>setCPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    <span  onClick={()=>setIsSignUp (!isSignUp) }>Already signin</span>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                
            </Form>
        </div>
    )
}

export default Signup
