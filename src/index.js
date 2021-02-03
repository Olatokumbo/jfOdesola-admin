import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {authReducer, aboutReducer, faithLiftReducer, socialsReducer,slideShowReducer} from "./store/reducers";
import { auth } from "./firebase/firebase";
import * as actionTypes from "./store/actions/actionTypes";
import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  about: aboutReducer,
  faithLift:  faithLiftReducer,
  socials: socialsReducer,
  slideshow: slideShowReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("Signed in", user);
    store.dispatch({ type: actionTypes.SIGNIN_SUCCESS, auth: true });
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    );
  } else {
    console.log("Signed out");
  }
});
