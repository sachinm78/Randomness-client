const initialstate = {
    sentence: '',
    hipster_data: []

}

export default (state = initialstate, action) => {
    switch(action.type) {
        case 'FETCH_HIPSTERDATA_SUCCESS':
            return {
                ...state,
                hipster_data: action.payload
            }
        case 'RANDOM_SENTENCE_SUCCESS':
            
            return {
                ...state, 
                sentence: action.payload,                
            }
                    
        default:
            return state
    }
}