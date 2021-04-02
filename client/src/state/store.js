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
import { isPosting } from "./Post/reducers";
import { feed } from "./Feed/reducers";
import {
  sendingFriendRequest,
  loadingFriendRequests,
  friendRequests,
  acceptingFriendRequest,
  decliningFriendRequest,
} from "./FriendRequest/reducers";
import { error } from "./Error/reducers";
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
  isPosting,
  feed,
  sendingFriendRequest,
  loadingFriendRequests,
  friendRequests,
  acceptingFriendRequest,
  decliningFriendRequest,
  error,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
