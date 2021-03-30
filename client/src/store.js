import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  user,
  loginError,
  loggedIn,
  registered,
  updateAvatar,
} from "./User/reducers";
import { friendsLoading, friends } from "./Friend/reducers";
import { searching, searchResults } from "./Search/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
  user,
  loginError,
  friendsLoading,
  friends,
  loggedIn,
  registered,
  updateAvatar,
  searching,
  searchResults,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
