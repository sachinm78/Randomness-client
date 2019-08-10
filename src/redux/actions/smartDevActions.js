
export const fetchDevData = () => dispatch => {
    return fetch('http://localhost:3001/devs')
    .then(res => res.json())
    .then(dev_data => dispatch({
        type: 'FETCH_DEVDATA_SUCCESSS',
        payload: dev_data
    }))
}

export const fetchRandomDevSentence = (sentence) => {
    return {
        type: 'RANDOM_DEVSENTENCE_SUCCESS',
        payload: sentence
    }
}