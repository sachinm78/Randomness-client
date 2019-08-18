
export const fetchFeedback = () => dispatch => {
    return fetch('http://localhost:3001/feedbacks')
    .then(res => res.json())
    .then(feedback => dispatch({
        type: 'FETCH_FEEDBACKDATA_SUCCESS',
        payload: feedback
    }))
}
