import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducer';
import { cardReducer } from './reducers/cardReducer';


const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart:cardReducer
})

const middleWare = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)
export default store;