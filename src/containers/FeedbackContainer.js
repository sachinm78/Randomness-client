import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFeedback } from '../redux/actions/feedbackActions'
import CommentForm from '../components/CommentForm'

class FeedbackContainer extends Component {

    state = {
        feedback: []
    }

    componentDidMount() {
        this.props.fetchFeedback()
        
    }

    render() {
        
        return (
            <div className = 'feedback-container'>
                <div class = 'feedback-header'>
                    <img src="http://thirdrock.com.au/wp-content/uploads/2018/04/comment1.jpg"></img>
                    <h1>Please share your feedback.</h1>
                </div>
                <div class = 'feedback-body'>
                    <CommentForm />
                </div>
                <div class = 'feedback-index'>
                    <h2>Feedback Index</h2>
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

export default connect(mapStateToProps, { fetchFeedback })(FeedbackContainer)