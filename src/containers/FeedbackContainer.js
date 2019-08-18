import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchFeedbacks } from '../redux/actions/feedbackActions'
import CommentForm from '../components/CommentForm'

class FeedbackContainer extends Component {

    state = {
        feedbacks: []
    }

    // componentDidMount() {
    //     this.props.fetchFeedbacks()
        
    // }

    // fetchSentenceOnClick=(e) => {
    //     e.preventDefault()
    //     let item = getRandom(this.props.state.hipster_data)
    //     this.props.fetchRandomSentence(item.sentence)
    // }

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

export default connect(mapStateToProps, {  })(FeedbackContainer)