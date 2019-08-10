import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchHipsterData, fetchRandomSentence } from '../redux/actions/hipsterActions'
import { getRandom } from '../components/randomizer'

class HipsterIpsumContainer extends Component {

    state = {
        hipster_data: []
    }

    componentDidMount() {
        this.props.fetchHipsterData()
        
    }

    fetchSentenceOnClick=(e) => {
        e.preventDefault()
        let item = getRandom(this.props.state.hipster_data)
        this.props.fetchRandomSentence(item.sentence)
    }

    render() {
        
        return (
            <div className = 'hip-container'>
                <div class = 'hip-header'>
                    <img src="https://www.pixel-creation.com/wp-content/uploads/sw-tfa-desktop-wallpaper-2560x1440-starwars.jpg" alt="starwars background"></img>
                    <h1>A Hipster Walked Into a Brew Pub and Said...</h1>
                </div>
                <div class = 'hip-body'>
                    <h2>{this.props.state.sentence}</h2>
                    <button onClick={e => this.fetchSentenceOnClick(e)}>Generate Sentence</button>                    
                </div>               
            </div>
        
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.hipster_data
    }
}

export default connect(mapStateToProps, { })(HipsterIpsumContainer)