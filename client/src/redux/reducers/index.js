import { combineReducers } from "redux";

import filters from "./filters";
import sneakers from "./sneakers";
import cart from "./cart";

const rootReducer = combineReducers({
    filters,
    sneakers,
    cart,
});

export default rootReducer;