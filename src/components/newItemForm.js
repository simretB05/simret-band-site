import React, { useState } from 'react';
import classes from "../components/form/form.module.scss"

const NewItemForm = (props) => {
    const [enteredUsername, setEnteredUserName] = useState('');
    const [namesValid, setNameIsValid] = useState();
    const [commentIsValid, setCommentIsValid] = useState();
    const [enteredComment, setEnteredUserComment] = useState('');
    const [error, setError] = useState();
    


 
  
    const validateNameHandler = () => {
        setNameIsValid(enteredUsername.includes('@') && enteredUsername.trim().length >=2);
    
    };
    const userNameChangedHandler = (event) => {
                validateNameHandler()

        setEnteredUserName(event.target.value)
    }
    
      const validateCommentHandler = () => {
        setCommentIsValid(enteredComment.trim().length > 6);
    };
    const userCommentChangedHandler = (event) => {
        validateCommentHandler()
        setEnteredUserComment(event.target.value)
    }
      const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length >=15|| enteredComment.trim().length <=6){
            setError({
                title: 'Invalid input',
                message: 'please enter a valid name and respectfull comment'
            });
            return alert(`${error.title} ,${error.message}`)
        }
        props.onAddUser(enteredUsername, enteredComment);
        console.log(enteredComment)
        setEnteredUserComment('');
        setEnteredUserName('');
    }
  return (
    <form onSubmit={addUserHandler} className={classes.form}>
        <div
          className={`${classes.form__control} ${
            namesValid === false ? classes.form__invalid : ''
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
                value={enteredUsername}
          />
          
          </div>

    <label htmlFor="name">COMMENT</label>
    <textarea
        aria-label="comments"
        type="text"
        name="comment"
        placeholder="Add a new comment"
        onChange={userCommentChangedHandler} 
        value={enteredComment}
    >
    </textarea>
          <div className={classes.main__btn}>
              <div className={classes.button__container}>
        <button id="submit" type="submit">
            COMMENT
        </button>
        </div>
    </div>
</form>  )
}

export default NewItemForm