import axios from "axios";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,
    USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS,USER_SIGNUP_FAIL, USER_LOGOUT } from "../constants/userConstant";
import * as Common from "../common";
export const login = (email, password) => async (dispatch) =>{
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config ={
            header:{
                'Content-Type': 'application/json'
            }
        }
      
        const { data } = await axios.post('http://localhost:3001/signin',{
            email,password
        },
        config
        )
        
        dispatch({
            type :USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userinfo',JSON.stringify(data))

    }catch (error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: 
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGOUT})
}


export const signUP = (name, email, password) => async (dispatch) =>{
    try{
        dispatch({
            type: USER_SIGNUP_REQUEST
        })

        const config ={
            header:{
                'Content-Type': 'application/json'
            }
        }
      
        const { data } = await axios.post('http://localhost:3001/signup',{
           name, email,password
        },
        config
        )
        
        dispatch({
            type :USER_SIGNUP_SUCCESS,
            payload:data
        })

        dispatch({
            type :USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userinfo',JSON.stringify(data))

    }catch (error){
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: 
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}