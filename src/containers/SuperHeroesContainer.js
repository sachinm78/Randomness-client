import React, { Component } from 'react'
// import { connect } from 'react-redux'

export default class SuperHeroesContainer extends Component {

    state = {
        superheroes: []
    }

    // componentDidMount() {
    //     fetch('http://localhost:3001')
    //         .then(res => res.json())
    //         .then(categories => this.setState({ categories }))
    // }

    render() {
        // if (categories.length === 0) {
        return (
            <div className = 'sh-container'>
                <h1>Welcome to Your Random Super Hero Adventure!</h1>
                <img src="https://i2.wp.com/beccabug.com/wp-content/uploads/2012/02/superherologos.jpg?resize=1140%2C682&ssl=1" alt="superhero background"></img> 
            </div>
        )
        // }
          
    }
}

// const mapStateToProps = state => {
//     return {
//         categories: state.categories
//     }
// }

// export default connect(mapStateToProps)(CategoriesContainer)