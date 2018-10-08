import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"; //We named it index.js under reducers. so no need to call. Probably by default it looks for index.js

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
