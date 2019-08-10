
export const fetchDevData = () => dispatch => {
    return fetch('http://localhost:3001/devs')
    .then(res => res.json())
    .then(dev_data => dispatch({
        type: 'FETCH_DEVDATA_SUCCESS',
        payload: dev_data
    }))
}

export const fetchRandomSentence = (sentence) => {
    return {
        type: 'RANDOM_SENTENCE_SUCCESS',
        payload: sentence
    }
}