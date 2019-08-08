import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSuperheros } from '../redux/actions/superherosActions'

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
                <h1>What's Your Random Superhero Name?</h1>
                <img src="https://i2.wp.com/beccabug.com/wp-content/uploads/2012/02/superherologos.jpg?resize=1140%2C682&ssl=1" alt="superhero background"></img> 
                
                {/* function getRandom(items) {
                return items[Math.floor(Math.random()*items.length)];
                } */}

                {/* Array.prototype.randomElement = function () {
                    return this[Math.floor(Math.random() * this.length)]
                }
                Now I can get a random array element by just typing:

                var myRandomElement = myArray.randomElement() */}
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