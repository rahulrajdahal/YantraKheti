import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./rootEpic";
import { rootReducer } from "./rootReducer";

const epicMiddleware = createEpicMiddleware();
const middleware = [epicMiddleware];

const reduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  : compose;

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    process.env.NODE_ENV === "development" ? reduxDevTools : compose
  )
);

epicMiddleware.run(rootEpic);
