import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer as authentication } from "@/features/authentication";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

function configureReducer() {
  const reducer = combineReducers({
    features: combineReducers({ authentication })
  });

  return connectRouter(history)(reducer);
}

function configureMiddlewares() {
  const baseMiddlewares = [routerMiddleware(history), thunk];
  const devMiddlewares = [...baseMiddlewares, logger];

  return IS_DEV
    ? applyMiddleware(...devMiddlewares)
    : applyMiddleware(...baseMiddlewares);
}

export const history = createBrowserHistory();

export const configure = (preloadedState = {}) => {
  const store = createStore(
    configureReducer(),
    preloadedState,
    configureMiddlewares()
  );

  return store;
};
