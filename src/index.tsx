import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";

import App from "./components/App";
import { appStore } from "./store";

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.querySelector("#game")
);