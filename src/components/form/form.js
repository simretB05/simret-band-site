import React, { useState } from "react";
import classes from "../form/form.module.scss";
import NewItemForm from "../newItemForm";

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    name: 'simret',
                    comment: 'mmmddfg',
                    commented: 'true',
                    editing: false,
                    date: "2022-01-16"

                },
                {
                    name: 'betty',
                    comment: 'hhhuooh',
                    commented: 'false',
                    editing: false,
                    date: "2022-01-16"
                }
            ]
        }
        this.addComments=this.addComments.bind(this)
    }
    addComments(commentIntrey){
        let items = this.items.slice()
        items.push(commentIntrey)
        this.setState({ items: items })
    }
    render() {
        return (
            <div className={classes.form}>
                <h2 className={classes.conv__title}>Join the Conversation</h2>
                <div className={classes.conv__container}>
                    <div className={classes.form__container}>
                    <div className={classes.avatar}></div>
                        <NewItemForm addComment={this.addComments } />
                    </div>
                    <div className={classes.comment}>
                        {this.state.items.map((data, index) => (
                        <div className={classes.comment__main}>
                            <div className={classes.comment__main__avatar}></div>
                            <div className={classes.comment__main__container}>
                                <ul className={classes.comment__main__list}>
                                    <li  className={classes.comment__main__list__name}>fname</li>
                                    <li className={classes.comment__main__list__date}>date</li>
                                </ul>
                                <div className={classes.comment__main__text__container}>
                                        <p className={classes.comment__main__text}>ooopppp</p>
                                </div>
                            </div>
                        </div>       
                        ))}
                    </div>
                </div>
            </div>
    );
  }
}
export default Form;

