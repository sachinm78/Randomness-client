
export const fetchFeedback = () => dispatch => {
    return fetch('http://localhost:3001/feedbacks')
    .then(res => res.json())
    .then(feedback => dispatch({
        type: 'FETCH_FEEDBACKDATA_SUCCESS',
        payload: feedback
    }))
}

export const setName = name => {
    return {
      type: 'SET_FEEDBACK_NAME',
      payload: name
    }
}
  
export const setComment = comment => {
    return {
        type: 'SET_FEEDBACK_COMMENT',
        payload: comment
    }
}

export const resetFeedbackForm = () => {
    return {
        type: "RESET_FEEDBACK_FORM"

    }
}

export const createFeedback = feedback => {

return dispatch => {

    dispatch({type: 'SUBMIT_FEEDBACK_SUCCESS', payload: feedback})
    fetch("http://localhost:3001/feedbacks", {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        feedback: {
            name: feedback.name,
            comment: feedback.comment
            }
        })
    })
    // .then(dispatch => {
    //     dispatch(resetFeedbackForm())
    // })
    .catch(error => console.log(error))
    }
}
