import React from "react";
import classes from "../components/form/form.module.scss"

class NewItemForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            formComment: '',
            itmeName: '',
            
        }
        this.submitForm = this.submitForm.bind(this)
        this.updateItemComment = this.updateItemComment.bind(this)
        this.updateItemName = this.updateItemName.bind(this)            
    }
    updateItemComment(event) {
        this.setState({
            formComment:event.target.value
        })
    }
    updateItemName(event) {
        this.setState({
            itmeName:event.target.value
        })
    }
    submitForm(event) {
        event.preventDefault()
        let item = {
            comment: this.state.formComment,
            name: this.state.itmeName,
            editing:false
        }
        this.props.addComment(item)

        this.setState({
            formComment: '',
            itmeName: '',
            
        })
    }
    render() {
    
    return (
    
        <form  onSubmit={this.submitForm} className={classes.form}>
            <label for="name">NAME</label>
            <input
                aria-label="name for comments"
                type="text"
                name="fname"
                placeholder="Enter your Name"
                onChange={this.updateItemName}
                value={this.state.name}
            >
            </input>
            <label for="name">COMMENT</label>
            <textarea
                aria-label="comments"
                type="text"
                name="comment"
                placeholder="Add a new comment"
                onChange={this.updateItemComment}
                value={this.state.Comment}
            >
            </textarea>
            <div class="main-btn">
                <div class="button-container">
                <button id="submit" type="submit">
                    COMMENT
                </button>
                </div>
            </div>
        </form>
      
    )
  }

}
export default NewItemForm;