import { combineReducers, createStore } from "redux";
import { bookReducer } from "./book/reducer";
import { memberReducer } from "./member/reducer";

const globalReducers = combineReducers({
	books: bookReducer,
	members: memberReducer,
});

export const globalStore = createStore(globalReducers);
