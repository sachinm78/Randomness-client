
export const fetchHipsterData = () => dispatch => {
    return fetch('http://localhost:3001/hipsters')
    .then(res => res.json())
    .then(hipster_data => dispatch({
        type: 'FETCH_HIPSTERDATA_SUCCESS',
        payload: hipster_data
    }))
}

export const fetchRandomSentence = (sentence) => {
    return {
        type: 'RANDOM_SENTENCE_SUCCESS',
        payload: sentence
    }
}