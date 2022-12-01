/** @format */

import React, { useState } from "react";
import classes from "./form/form.module.scss";
const current = new Date();

const date = `${current.getDate()}/${
	current.getMonth() + 1
}/${current.getFullYear()}`;

function NewForms({ onAddUser, data, onRemove }) {
	const [liks, setLiks] = useState(0);

	const addLiks = (event) => {
		event.preventDefault();
		setLiks((x) => x + 1);
	};
	// const onRemove = () => {
	// 	setUsersList(usersList.filter((el) => el.id !== data.id));
	// 	console.log(data.id);
	// };

	return (
		<div className={classes.comment__main} key={data.id}>
			<div className={classes.comment__main__avatar}>{data.img}</div>
			<div className={classes.comment__main__container}>
				<ul className={classes.comment__main__list}>
					<li className={classes.comment__main__list__name}>{data.name}</li>
					<li className={classes.comment__main__list__date}>{date}</li>
				</ul>

				<div className={classes.comment__main__text__container}>
					<textarea
						className={classes.comment__main__text__container__body}
						aria-label="comments"
						type="text"
						name="comment"
						placeholder="Add a new comment"
						defaultValue={data.comment}
					></textarea>
					<div className={classes.formbtn}>
						<button
							onClick={() => onRemove(data.id)}
							className={classes.deletebtn}
						>
							<img src="./assets/icons/icon-delete.svg" alt="delete button" />
						</button>
						<button onClick={addLiks} className={classes.likebtn}>
							<img src="./assets/icons/icon-like.svg" alt="likes button" />
							<p>{liks}</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NewForms;
