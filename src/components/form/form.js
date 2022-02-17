import React from "react";
import classes from "../form/form.module.scss";

function Form() {
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
              id="name"
              name="Name"
              placeholder="Enter your Name"
            ></input>
            <label for="name">COMMENT</label>
            <textarea
              name="COMMENT"
              id="comment"
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
        <div id="comment-storage"></div>
      </div>
    </div>
  );
}

export default Form;
