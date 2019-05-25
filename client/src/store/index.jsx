import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "../reducers/reducers";
import thunk from 'redux-thunk'

export const store = createStore(
  combineReducers({
    phonesState: reducers
  }),
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
