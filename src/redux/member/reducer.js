import { members } from "../../data/member";
import { REMOVE_MEMBER } from "./action";
import { createStore } from "redux";

export const memberReducer = (state = members, action) => {
	const newMembers = [...state];
	switch (action.type) {
		case REMOVE_MEMBER:
			newMembers.pop();
			return newMembers;
		default:
			return newMembers;
	}
};
