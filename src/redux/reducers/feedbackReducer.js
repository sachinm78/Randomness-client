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
                    
        default:
            return state
    }
}