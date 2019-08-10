const initialstate = {
    sentence: '',
    dev_data: []

}

export default (state = initialstate, action) => {
    switch(action.type) {
        case 'FETCH_DEVDATA_SUCCESS':
            return {
                ...state,
                dev_data: action.payload
            }
        case 'RANDOM_DEVSENTENCE_SUCCESS':
            
            return {
                ...state, 
                sentence: action.payload,                
            }
                    
        default:
            return state
    }
}