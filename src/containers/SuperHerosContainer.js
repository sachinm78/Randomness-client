import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSuperheros, fetchRandomPrefix, fetchRandomName, fetchRandomSuffix, fetchRandomPower } from '../redux/actions/superherosActions'
import { getRandom } from '../components/randomizer'

class SuperHerosContainer extends Component {

    state = {
        superheros: []
    }

    componentDidMount() {
        this.props.fetchSuperheros()
        
    }

    fetchPrefixOnClick=(e) => {
        e.preventDefault()
        let item = getRandom(this.props.state.superheros)
        this.props.fetchRandomPrefix(item.prefix)
    }

    fetchNameOnClick=(e) => {
        e.preventDefault()
        let item = getRandom(this.props.state.superheros)
        this.props.fetchRandomName(item.name)
    }

    fetchSuffixOnClick=(e) => {
        e.preventDefault()
        let item = getRandom(this.props.state.superheros)
        this.props.fetchRandomSuffix(item.suffix)
    }

    fetchPowerOnClick=(e) => {
        e.preventDefault()
        let item = getRandom(this.props.state.superheros)
        this.props.fetchRandomPower(item.power)
    }

    render() {
        return (
            <div className = 'sh-container'>
                    <div class = 'sh-header'>
                        <img src="https://i2.wp.com/beccabug.com/wp-content/uploads/2012/02/superherologos.jpg?resize=1140%2C682&ssl=1" alt="superhero background"></img>

                        <h1>Generate Your Random Superhero!</h1>
                    </div>
                    <div class = 'sh-body'>
                        <h2> {this.props.state.prefix} {this.props.state.name} {this.props.state.suffix}</h2>
                        <button onClick={e => this.fetchPrefixOnClick(e)}>Generate Prefix</button>
                        <button onClick={e => this.fetchNameOnClick(e)}>Generate Name</button>
                        <button onClick={e => this.fetchSuffixOnClick(e)}>Generate Suffix</button>
                        <br />
                        <h2>has the power of {this.props.state.power}</h2>
                        <button onClick={e => this.fetchPowerOnClick(e)}>Generate Power</button>
                        
                    </div>
            </div>
        
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.superheros
    }
}

export default connect(mapStateToProps, { fetchSuperheros, fetchRandomPrefix, fetchRandomName, fetchRandomSuffix, fetchRandomPower })(SuperHerosContainer)