import React, { Component } from 'react'
// import { connect } from 'react-redux'

export default class StarWarsContainer extends Component {

    state = {
        starwars: []
    }

    // componentDidMount() {
    //     fetch('http://localhost:3001')
    //         .then(res => res.json())
    //         .then(categories => this.setState({ categories }))
    // }

    render() {
        // if (categories.length === 0) {
        return (
            <div className = 'sw-container'>
                <h1>A Long Time Ago In A Galaxy Far Far Away...Things Got Random!</h1>
                <img src="https://www.pixel-creation.com/wp-content/uploads/sw-tfa-desktop-wallpaper-2560x1440-starwars.jpg" alt="starwars background"></img> 
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