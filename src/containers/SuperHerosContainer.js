import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSuperheros, fetchRandomPrefix } from '../redux/actions/superherosActions'
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

    render() {
        return (
            <div className = 'sh-container'>
                <img src="https://i2.wp.com/beccabug.com/wp-content/uploads/2012/02/superherologos.jpg?resize=1140%2C682&ssl=1" alt="superhero background"></img>

                <h1>What's Your Random Superhero Name?</h1>
                <h1> {this.props.state.prefix} {this.props.state.name} {this.props.state.suffix} has the power of {this.props.state.power}</h1>
                
                <h2 >Prefix: {this.props.state.prefix}</h2>
                <button onClick={e => this.fetchPrefixOnClick(e)}>Change Prefix</button>
                <h2>Name: </h2><h2>Suffix: </h2><h2>Power: </h2>

                                
            </div>
        
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.superheros
    }
}

export default connect(mapStateToProps, { fetchSuperheros, fetchRandomPrefix })(SuperHerosContainer)