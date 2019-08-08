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
        case 'RANDOM_NAME_SUCCESS':
        
            return {
                ...state, 
                name: action.payload,                
            }

        case 'RANDOM_SUFFIX_SUCCESS':
    
            return {
                ...state, 
                suffix: action.payload,                
            }

        case 'RANDOM_POWER_SUCCESS':

            return {
                ...state, 
                power: action.payload,                
            }
            
        default:
            return state
    }
}