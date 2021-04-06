import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducers from "./User/reducers";
import friendReducers from "./Friend/reducers";
import searchReducers from "./Search/reducers";
import { isPosting } from "./Post/reducers";
import { feed } from "./Feed/reducers";
import friendRequestReducers from "./FriendRequest/reducers";
import recipeReducers from "./Recipe/reducers";
import { error } from "./Error/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
  ...userReducers,
  ...friendRequestReducers,
  ...recipeReducers,
  ...friendReducers,
  ...searchReducers,
  isPosting,
  feed,
  error,
};

const rootReducer = combineReducers(reducers);

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

export const configureStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
