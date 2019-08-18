import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchFeedbacks } from '../redux/actions/feedbackActions'
import CommentForm from './CommentForm'

class FeedbackContainer extends Component {

    state = {
        feedbacks: []
    }

    componentDidMount() {
        this.props.fetchFeedbacks()
        
    }

    fetchSentenceOnClick=(e) => {
        e.preventDefault()
        let item = getRandom(this.props.state.hipster_data)
        this.props.fetchRandomSentence(item.sentence)
    }

    render() {
        
        return (
            <div className = 'feedback-container'>
                <div class = 'feedback-header'>
                    <img src="https://static.vecteezy.com/system/resources/previews/000/119/234/non_2x/vector-retro-hipster-style-background.jpg" alt="feedback background"></img>
                    <h1>Please share your feedback.</h1>
                </div>
                <div class = 'feedback-body'>
                    <CommentForm />
                </div>
                <div class = 'feedback-index'>
                                  
                </div>               
            </div>
        
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.feedbacks
    }
}

export default connect(mapStateToProps, { fetchFeedbacks })(FeedbackContainer)