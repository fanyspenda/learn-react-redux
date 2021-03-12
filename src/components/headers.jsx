import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBook } from "../redux/book/actionCreator";
import { removeMember } from "../redux/member/actionCreator";

const Headers = () => {
	const ReduxData = useSelector((state) => state);
	const [members, setMembers] = useState(ReduxData.members);
	const [books, setBooks] = useState(ReduxData.books);
	const dispatch = useDispatch();

	const handleClick = () => {
		const newMembers = [...members];
		const newBooks = [...books];
		newMembers.pop();
		newBooks.pop();
		setMembers(newMembers);
		setBooks(newBooks);
		console.log(ReduxData);
	};

	useEffect(() => {
		dispatch(removeBook());
		dispatch(removeMember());
	}, [books, members]);

	return (
		<>
			<p>{books.toString()}</p>
			<p>{members.toString()}</p>

			<button onClick={() => handleClick()}>
				click to remove 1 data
			</button>
		</>
	);
};

export default Headers;
