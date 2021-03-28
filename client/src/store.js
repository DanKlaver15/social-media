import { createStore, combineReducers, applyMiddleware } from "redux";
import { user, loginError } from "./User/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { friendsLoading, friends } from "./Friend/reducers";

const reducers = {
  user,
  loginError,
  friendsLoading,
  friends,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
