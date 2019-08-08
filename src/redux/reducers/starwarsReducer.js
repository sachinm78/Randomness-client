const initialstate = {
    character: '',
    droid: '',
    planet: '',
    vehicle: '',
    starwars_data: []

}

export default (state = initialstate, action) => {
    switch(action.type) {
        case 'FETCH_STARWARSDATA_SUCCESS':
            return {
                ...state,
                starwars_data: action.payload
            }
        case 'RANDOM_CHARACTER_SUCCESS':
            
            return {
                ...state, 
                character: action.payload,                
            }
        case 'RANDOM_DROID_SUCCESS':
        
            return {
                ...state, 
                droid: action.payload,                
            }

        case 'RANDOM_PLANET_SUCCESS':
    
            return {
                ...state, 
                planet: action.payload,                
            }

        case 'RANDOM_VEHICLE_SUCCESS':

            return {
                ...state, 
                vehicle: action.payload,                
            }
            
        default:
            return state
    }
}