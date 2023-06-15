import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // wrap in Provider to give access to redux. Doesn't need to be at this level, but only components inside Provider can access
    <Provider store={store}>
        <App />
    </Provider>
);
