import React, { useState } from "react";
import classes from "../form/form.module.scss";

function Form() {
  const [state, setState] = useState({
    fname: "",
    comment: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={classes.form}>
      <h2 className={classes.conv__title}>Join the Conversation</h2>
      <div className={classes.conv__container}>
        <div className={classes.form__container}>
          <div className={classes.avatar}></div>
          <form className={classes.form}>
            <label for="name">NAME</label>
            <input
              type="text"
              name="fname"
              value={state.fname}
              onChange={handleChange}
              placeholder="Enter your Name"
            ></input>
            <label for="name">COMMENT</label>
            <textarea
              type="text"
              name="comment"
              value={state.comment}
              onChange={handleChange}
              placeholder="Add a new comment"
            ></textarea>

            <div class="main-btn">
              <div class="button-container">
                <button id="submit" type="submit">
                  COMMENT
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className={classes.comment}>
          <div className={classes.comment__avatar}></div>
          <div className={classes.comment__container}>
            <ul className={classes.comment__list}>
              <li className={classes.comment__list__name}>{state.fname}</li>
              <li className={classes.comment__list__date}>date</li>
            </ul>
            <div className={classes.comment__text__container}>
              <p className={classes.comment__text}>{state.comment}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
