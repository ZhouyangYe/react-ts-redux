import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";
import { createStore,applyMiddleware } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

ReactDOM.render(
    <App />,
    document.getElementById("game")
);