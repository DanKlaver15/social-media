import { createStore, combineReducers, applyMiddleware } from "redux";
import { isAuthorized, user } from "./User/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
  isAuthorized,
  user,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
