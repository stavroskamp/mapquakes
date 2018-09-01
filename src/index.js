import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import "./index.css";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-day-picker/lib/style.css";
import App from "./App";
import "typeface-open-sans";
import smoothscroll from "smoothscroll-polyfill";
import { devToolsEnhancer } from "redux-devtools-extension";

smoothscroll.polyfill();
window.__forceSmoothScrollPolyfill__ = true;

const middleware = applyMiddleware(thunk);

const store = createStore(
  rootReducer,
  compose(
    middleware,
    devToolsEnhancer()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
