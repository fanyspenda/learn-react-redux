import { REMOVE_BOOK, UPDATE_BOOK } from "./action";

export const updateBook = (newBook) => ({
	type: UPDATE_BOOK,
	payload: newBook,
});

export const removeBook = () => ({
	type: REMOVE_BOOK,
});
