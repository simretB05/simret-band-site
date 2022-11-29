/** @format */

import React from "react";
import classes from "../form/form.module.scss";
import NewForms from "../newforms";
import NewItemForm from "../newItemForm";

function Form({ usersList, onAddUser, setUsersList }) {
	return (
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
							key={usersList.id}
							data={data}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Form;
