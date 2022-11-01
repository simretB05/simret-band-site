import React from "react";
import classes from "../form/form.module.scss";
import NewItemForm from "../newItemForm";


function Form(props) {
      
    
  return (
            <div className={classes.form}>
                <h2 className={classes.conv__title}>Join the Conversation</h2>
                <div className={classes.conv__container}>
                    <div className={classes.form__container}>
                    <div className={classes.avatar}></div>
          <NewItemForm onAddUser={props.onAddUser } />
                    </div>
              <div className={classes.comment}>
                  {props.users.map((data) => (
                  
                        <div className={classes.comment__main}>
                          <div className={classes.comment__main__avatar}>{data.img}</div>
                            <div className={classes.comment__main__container}>
                                <ul className={classes.comment__main__list}>
                                  <li className={classes.comment__main__list__name}>{data.name}</li>
                                  <li className={classes.comment__main__list__date}>{data.date }</li>
                                </ul>
                          
                                <div className={classes.comment__main__text__container}>
                                    <textarea className={classes.comment__main__text__container__body}
                                        ariaLabel="comments"
                                        type="text"
                                        name="comment"
                                        placeholder="Add a new comment"
                                        value={data.comment}
                                    >
                                    </textarea>
                                  
                                  </div>
                            </div>
                         </div>
                  ))}
                    </div>
                </div>
            </div>
    );
  }
 


export default Form