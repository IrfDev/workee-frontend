import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { Provider } from "react-redux";
import { rootEpic } from "./store/epics";

const epicMiddleware = createEpicMiddleware();

import rootReducer from "./store/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
epicMiddleware.run(rootEpic);

import { ApolloProvider } from "@apollo/react-hooks";
import client from "./GQL/client";

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
