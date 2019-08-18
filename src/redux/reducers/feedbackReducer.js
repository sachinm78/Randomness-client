const initialstate = {
    name: '',
    comment: '',
    feedback: []

}

export default (state = initialstate, action) => {
    switch(action.type) {
        case 'FETCH_FEEDBACKDATA_SUCCESS':
            return {
                ...state,
                feedback: action.payload
            }
        case 'SUBMIT_FEEDBACK_SUCCESS':
            return {
                ...state,
                feedback: [...state.feedback, action.payload]
            }
        case 'SET_FEEDBACK_NAME':
            return {
                ...state,
                name: action.payload
            }
        
        case 'SET_FEEDBACK_COMMENT':
            return {
                ...state,
                comment: action.payload
            }
        case 'UPDATED_FORM':
            return {
                ...state,
                feedback: action.feedback
            }
        case 'RESET_FEEDBACK_FORM':
            return initialstate;

        default:
            return state
    }
}