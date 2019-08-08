const initialstate = {
    prefix: '',
    name: '',
    suffix: '',
    power: '',
    superheros: []

}

export default (state = initialstate, action) => {
    switch(action.type) {
        case 'FETCH_SUPERHEROS_SUCCESS':
            return {
                ...state,
                superheros: action.payload
            }
        case 'RANDOM_PREFIX_SUCCESS':
            
            return {
                ...state, 
                prefix: action.payload,                
            }
            
        default:
            return state
    }
}