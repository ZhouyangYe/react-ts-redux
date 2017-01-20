import {createStore, Store} from "redux";

import Reducer from "./reducers";
import {State} from "./state";

export const appStore: Store<{}> =
	createStore(Reducer);