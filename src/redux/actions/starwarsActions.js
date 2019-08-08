
export const fetchStarWarsData = () => dispatch => {
    return fetch('http://localhost:3001/starwars')
    .then(res => res.json())
    .then(starwars_data => dispatch({
        type: 'FETCH_STARWARSDATA_SUCCESS',
        payload: starwars_data
    }))
}

export const fetchRandomCharacter = (character) => {
    return {
        type: 'RANDOM_CHARACTER_SUCCESS',
        payload: character
    }
}

export const fetchRandomDroid = (droid) => {
    return {
        type: 'RANDOM_DROID_SUCCESS',
        payload: droid
    }
}

export const fetchRandomPlanet = (planet) => {
    return {
        type: 'RANDOM_PLANET_SUCCESS',
        payload: planet
    }
}

export const fetchRandomVehicle = (vehicle) => {
    return {
        type: 'RANDOM_VEHICLE_SUCCESS',
        payload: vehicle
    }
}