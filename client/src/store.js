import { createStore, combineReducers, applyMiddleware } from "redux";
import { user, loginError, loggedIn, registered } from "./User/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
  user,
  loginError,
  loggedIn,
  registered,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
