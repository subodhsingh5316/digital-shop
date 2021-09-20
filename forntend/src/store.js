import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productDetailsReducer, productListReducer } from "./reducers/productReaducers";
import { cartReaducer } from "./reducers/cartReaducers";
import { userLoginReducer, userSignUpReducer } from "./reducers/userReaducer";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReaducer,
    userLogin: userLoginReducer,
    userSignUp: userSignUpReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse
(localStorage.getItem('cartItems')) : []

const initialState = {
    cart:{ cartItems:cartItemsFromStorage},
}

const middleware = [thunk]


const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
    )

    export default store