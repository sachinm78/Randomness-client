import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchDevData, fetchRandomDevSentence } from '../redux/actions/smartDevActions'
import { getRandom } from '../components/randomizer'

class SmartDevContainer extends Component {

    state = {
        dev_data: []
    }

    componentDidMount() {
        this.props.fetchDevData()
        
    }

    fetchSentenceOnClick=(e) => {
        e.preventDefault()
        let item = getRandom(this.props.state.dev_data)
        this.props.fetchRandomSentence(item.sentence)
    }

    render() {
        
        return (
            <div className = 'dev-container'>
                <div class = 'dev-header'>
                    <img src="https://static.vecteezy.com/system/resources/previews/000/119/234/non_2x/vector-retro-hipster-style-background.jpg" alt="dev background"></img>
                    <h1>Say Something Like a Smart Dev!</h1>
                </div>
                <div class = 'dev-body'>
                    <h2>{this.props.state.sentence}</h2>
                    <button onClick={e => this.fetchSentenceOnClick(e)}>Generate Sentence</button>                    
                </div>               
            </div>
        
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.dev_data
    }
}

export default connect(mapStateToProps, { fetchDevData, fetchRandomDevSentence })(SmartDevContainer)