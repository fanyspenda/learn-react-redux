import { books } from "../../data/book";
import { REMOVE_BOOK } from "./action";
import { createStore } from "redux";

export const bookReducer = (state = books, action) => {
	const newBooks = [...state];
	switch (action.type) {
		case REMOVE_BOOK:
			newBooks.pop();
			return newBooks;
		default:
			return newBooks;
	}
};
