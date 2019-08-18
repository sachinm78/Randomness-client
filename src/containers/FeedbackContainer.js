import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFeedback, setName, setComment, resetFeedbackForm, createFeedback } from '../redux/actions/feedbackActions'
import FeedbackForm from '../components/FeedbackForm'

class FeedbackContainer extends Component {

    state = {
        feedback: []
    }

    componentDidMount() {
        this.props.fetchFeedback()
        
    }

    // handleOnChange = event => {
    //     const { name, value} = event.target;
    //     const currentMarketFormData = Object.assign({}, this.props.marketsFormData, {
    //       [name]: value
    //     })
    //     this.props.updateMarketFormData(currentMarketFormData)
    //   }
    
    //   handleOnSubmit = event => {
    //     event.preventDefault()
    
    //     this.props.createMarket(this.props.marketsFormData)
    //   }

    render() {
        
        return (
            <div className = 'feedback-container'>
                <div class = 'feedback-header'>
                    <img src="http://thirdrock.com.au/wp-content/uploads/2018/04/comment1.jpg" alt='feedback background'></img>
                    <h1>Please share your feedback.</h1>
                </div>
                <div class = 'feedback-body'>
                    <FeedbackForm />
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

export default connect(mapStateToProps, { fetchFeedback, setName, setComment, resetFeedbackForm, createFeedback })(FeedbackContainer)