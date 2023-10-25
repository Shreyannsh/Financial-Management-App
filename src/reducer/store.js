import { createStore, applyMiddleware } from "redux";
import thunk from "react-redux";

import reducer from "./reducer";

const Store = createStore(reducer, applyMiddleware(thunk));

export default Store;
