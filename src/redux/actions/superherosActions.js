
export const fetchSuperheros = () => dispatch => {
    return fetch('http://localhost:3001/superheros')
    .then(res => res.json())
    .then(superheros => dispatch({
        type: 'FETCH_SUPERHEROS_SUCCESS',
        payload: superheros
    }))
}

export const fetchRandomPrefix = (prefix) => {
    return {
        type: 'RANDOM_PREFIX_SUCCESS',
        payload: prefix
    }
}

export const fetchRandomName = (name) => {
    return {
        type: 'RANDOM_NAME_SUCCESS',
        payload: name
    }
}