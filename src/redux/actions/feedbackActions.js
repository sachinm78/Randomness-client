
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

const addFeedback = feedback => {
    return {
      type: "SUBMIT_FEEDBACK_SUCCESS",
      feedback
    }
}

export const resetFeedbackForm = () => {
    return {
        type: "RESET_FEEDBACK_FORM"

    }
}

export const createFeedback = feedback => {

return dispatch => {

    return fetch("http://localhost:3001/feedbacks", {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({name: feedback.name, comment: feedback.comment}),
    })
    .then(res => res.json())
    .then(feedback => {
        dispatch(addFeedback(feedback))
        dispatch(resetFeedbackForm())
    })
    .catch(error => console.log(error))
    }
}
