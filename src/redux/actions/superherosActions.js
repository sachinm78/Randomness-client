
export const fetchSuperheros = () => dispatch => {
    return fetch('http://localhost:3001/superheros')
    .then(res => res.json())
    .then(superheros => dispatch({
        type: 'FETCH_SUPERHEROS_SUCCESS',
        payload: superheros
    }))
}

export const fetchRandomPrefix = (test) => {
    return {
        type: 'RANDOM_PREFIX_SUCCESS',
        payload: test
    }
}