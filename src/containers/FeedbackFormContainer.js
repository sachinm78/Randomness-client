import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFeedback, setName, setComment, resetFeedbackForm, createFeedback, updateFeedbackForm } from '../redux/actions/feedbackActions'

class FeedbackFormContainer extends Component {

    state = {
        name: '',
        comment: '',
        feedback: []
    }

    componentDidMount() {
        this.props.fetchFeedback()
        
    }

    handleOnChange = e => {
        const { name, value} = e.target;
        const feedbackFormData = Object.assign({}, this.props.feedback, {
          [name]: value
        })
        this.props.updateFeedbackForm(feedbackFormData)
      }
    
      handleOnSubmit = e => {
        e.preventDefault()
        this.props.createFeedback(this.props.feedback)
      }

    render() {
        const { name, comment } = this.props.feedback;

        return (
            <div className = 'feedback-container'>
                <div class = 'feedback-header'>
                    <img src="http://thirdrock.com.au/wp-content/uploads/2018/04/comment1.jpg" alt='feedback background'></img>
                    <h1>Please share your feedback.</h1>
                </div>
                <div class = 'feedback-body'>
                    <form onSubmit={this.handleOnSubmit}>
                        <div>
                            <label>
                            Name:
                            <input type="text" onChange= {this.handleOnChange} name= "name" value={name} />
                            </label>
                            <br />
                            <label>
                            Comment:
                            <textarea type="text" onChange= {this.handleOnChange} name= "comment" value={comment} cols={24} rows={5} />
                            </label>
                        </div>
                        <div>
                            <button type="submit">Submit Comment</button>
                        </div>                   
                    </form>
                </div>                
            </div>
        
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.feedback
    }
}

export default connect(mapStateToProps, { fetchFeedback, setName, setComment, resetFeedbackForm, createFeedback, updateFeedbackForm })(FeedbackFormContainer)