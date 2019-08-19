import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFeedback, setName, setComment, createFeedback, resetFeedbackForm } from '../redux/actions/feedbackActions'

class FeedbackFormContainer extends Component {

    componentDidMount() {
        this.props.fetchFeedback()
        
    }

    handleNameChange = e => {
        e.preventDefault()
        this.props.setName(e.target.value)
    }
    
    handleCommentChange = e => {
        e.preventDefault()
        this.props.setComment(e.target.value)
    }
    
    handleOnSubmit = e => {
        e.preventDefault()
            let feedbackData = {
            name: this.props.feedback.name,
            comment: this.props.feedback.comment,
            }
            this.props.createFeedback(feedbackData)
            this.setState({
                name: "",
                comment: ""
            })
        }
    
    render() {
        
        return (
            <div className = 'feedback-container'>
                <div class = 'feedback-header'>
                    <img src="http://thirdrock.com.au/wp-content/uploads/2018/04/comment1.jpg" alt='feedback background'></img>
                    <h1>Please share your feedback.</h1>
                </div>
                <div class = 'feedback-body'>
                    <form onSubmit={e => this.handleOnSubmit(e)}>
                        <div>
                            <label>
                            Name:
                            <input type="text" name= "name" onChange={e => this.handleNameChange(e)} value={this.props.name} />
                            </label>
                            <br />
                            <label>
                            Comment:
                            <textarea type="text" name= "comment" onChange={e => this.handleCommentChange(e)} value={this.props.comment} cols={24} rows={5} />
                            </label>
                        </div>
                        <div>
                            <button type="submit">Submit Feedback</button>
                        </div>                   
                    </form>
                </div>                
            </div>
        
        )
    }
}

const mapStateToProps = state => {
    return {
        feedback: state.feedback
    }
}

export default connect(mapStateToProps, { fetchFeedback, setName, setComment, createFeedback, resetFeedbackForm })(FeedbackFormContainer)