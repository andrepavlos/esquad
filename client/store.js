import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer as authentication } from "features/authentication";

function configureReducer() {
  const reducer = combineReducers({
    features: combineReducers({ authentication })
  });

  return reducer;
}

function configureMiddlewares() {
  const baseMiddlewares = [thunk];
  const devMiddlewares = [...baseMiddlewares, logger];

  return IS_DEV
    ? applyMiddleware(...devMiddlewares)
    : applyMiddleware(...baseMiddlewares);
}

export const configure = (preloadedState = {}) => {
  const store = createStore(
    configureReducer(),
    preloadedState,
    configureMiddlewares()
  );

  return store;
};
