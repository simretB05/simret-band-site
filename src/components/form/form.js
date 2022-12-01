/** @format */

import React from "react";
import classes from "../form/form.module.scss";
import NewForms from "../newforms";
import NewItemForm from "../newItemForm";
import img from "./spinner.gif";

function Form({
	usersList,
	onAddUser,
	setUsersList,
	setIsLoding,
	isLoding,
	onRemove,
}) {
	// if (!isLoding && (!usersList || usersList.length === 0)) {
	// 	return <p> NO Comments Yet</p>;
	// }
	return isLoding ? (
		<div className={classes["spinner-card"]}>
			<img className={classes.spinner} src={img} alt="spinner img" />
		</div>
	) : (
		<div className={classes.form}>
			<h2 className={classes.conv__title}>Join the Conversation</h2>
			<div className={classes.conv__container}>
				<div className={classes.form__container}>
					<div className={classes.avatar}></div>
					<NewItemForm onAddUser={onAddUser} />
				</div>
				<div className={classes.comment}>
					{usersList.map((data) => (
						<NewForms
							setUsersList={setUsersList}
							usersList={usersList}
							isLoding={isLoding}
							setIsLoding={setIsLoding}
							key={data.id}
							data={data}
							onRemove={onRemove}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Form;
