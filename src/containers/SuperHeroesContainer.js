import React, { Component } from 'react'
// import { connect } from 'react-redux'

export default class SuperHeroesContainer extends Component {

    state = {
        superheros: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/superheros')
            .then(res => res.json())
            .then(superheros => this.setState({ superheros }))
    }

    render() {
        return (
            <div className = 'sh-container'>
                <h1>Welcome to Your Random Super Hero Adventure!</h1>
                <img src="https://i2.wp.com/beccabug.com/wp-content/uploads/2012/02/superherologos.jpg?resize=1140%2C682&ssl=1" alt="superhero background"></img> 
                
                {/* <ul>
                    {this.state.superheros.map(superhero => (
                        <div>
                            <p>Name: {superhero.name}</p>
                        </div>
                    ))}
                </ul> */}
            </div>
        
        )
    }
    

}

// const mapStateToProps = state => {
//     return {
//         superheros: state.superheros
//     }
// }

// export default connect(mapStateToProps)(SuperHerosContainer)