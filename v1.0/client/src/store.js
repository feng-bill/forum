// Store holds the state tree of the application. 
// It is the only way to change the state inside and dispatch an action on it.

//getState() and dispatch(action) will be availiable. 

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"; //named it index.js under reducers. so no need to call. Probably by default it looks for index.js

const initialState = {};

const middleware = [thunk];

//Frist parameter is my FIRST reducer
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
); //spread operator

export default store;
