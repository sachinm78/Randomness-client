import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDevData, fetchRandomSentence } from '../redux/actions/smartDevActions'
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
                    <img src="https://wallpaperplay.com/walls/full/5/f/4/164632.jpg" alt="dev background"></img>
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

export default connect(mapStateToProps, { fetchDevData, fetchRandomSentence })(SmartDevContainer)