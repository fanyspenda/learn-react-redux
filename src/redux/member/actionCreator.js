import { REMOVE_MEMBER, UPDATE_MEMBER } from "./action";

export const updateMember = (newMember) => ({
	type: UPDATE_MEMBER,
	payload: newMember,
});

export const removeMember = () => ({
	type: REMOVE_MEMBER,
});
