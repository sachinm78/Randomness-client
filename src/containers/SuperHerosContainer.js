import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSuperheros } from '../redux/actions/superherosActions'
// import { randomness } from '../components/randomizer'

class SuperHerosContainer extends Component {

    state = {
        superheros: []
    }

    componentDidMount() {
        this.props.fetchSuperheros()
    }

    render() {
        return (
            <div className = 'sh-container'>
                <img src="https://i2.wp.com/beccabug.com/wp-content/uploads/2012/02/superherologos.jpg?resize=1140%2C682&ssl=1" alt="superhero background"></img>

                <h1>What's Your Random Superhero Name?</h1>
                
                <h2>Prefix: </h2><h2>Name: </h2><h2>Suffix: </h2><h2>Power: </h2>
                
            </div>
        
        )
    }
}

const mapStateToProps = state => {
    return {
        superheros: state.superheros
    }
}

export default connect(mapStateToProps, { fetchSuperheros })(SuperHerosContainer)