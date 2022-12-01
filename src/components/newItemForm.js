/** @format */

import React, { useState } from "react";
import classes from "../components/form/form.module.scss";

const NewItemForm = ({ onAddUser }) => {
	const current = new Date();

	const [name, setName] = useState("");
	const [namesValid, setNameIsValid] = useState();
	const [commentIsValid, setCommentIsValid] = useState();
	const [comment, setComment] = useState("");
	const [error, setError] = useState();

	const validateNameHandler = () => {
		setNameIsValid(name.includes("@") && name.trim().length >= 2);
	};
	const userNameChangedHandler = (event) => {
		validateNameHandler();

		setName(event.target.value);
	};

	const validateCommentHandler = () => {
		setCommentIsValid(comment.trim().length > 6);
	};
	const userCommentChangedHandler = (event) => {
		validateCommentHandler();
		setComment(event.target.value);
	};
	const addUserHandler = (event) => {
		event.preventDefault();
		const newComment = {
			name,
			comment,
		};
		if (name.trim().length >= 15 || comment.trim().length <= 6) {
			setError({
				title: "Invalid input",
				message: "please enter a valid name and respectfull comment",
			});
			return alert(`${error.title} ,${error.message}`);
		}
		onAddUser(newComment);
		console.log(newComment);
		console.log(name);

		setComment("");
		setName("");
	};
	return (
		<form onSubmit={addUserHandler} className={classes.form}>
			<div
				className={`${classes.form__control} ${
					namesValid === false ? classes.form__invalid : ""
				}`}
			>
				<label htmlFor="name">NAME</label>
				<input
					aria-label="name for comments"
					type="text"
					name="fname"
					placeholder="Enter your Name"
					onChange={userNameChangedHandler}
					onBlur={validateNameHandler}
					value={name}
				/>
			</div>

			<label htmlFor="name">COMMENT</label>
			<textarea
				aria-label="comments"
				type="text"
				name="comment"
				placeholder="Add a new comment"
				onChange={userCommentChangedHandler}
				value={comment}
			></textarea>
			<div className={classes.main__btn}>
				<div className={classes.button__container}>
					<button id="submit" type="submit">
						COMMENT
					</button>
				</div>
			</div>
		</form>
	);
};

export default NewItemForm;
