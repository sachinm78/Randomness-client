import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { fetchStarWarsData, fetchRandomPrefix, fetchRandomName, fetchRandomSuffix, fetchRandomPower } from '../redux/actions/starwarsActions'
// import { getRandom } from '../components/randomizer'

export default class StarWarsContainer extends Component {

    // state = {
    //     starwars_data: []
    // }

    // componentDidMount() {
    //     this.props.fetchStarWarsData()
        
    // }

    // fetchPrefixOnClick=(e) => {
    //     e.preventDefault()
    //     let item = getRandom(this.props.state.superheros)
    //     this.props.fetchRandomPrefix(item.prefix)
    // }

    // fetchNameOnClick=(e) => {
    //     e.preventDefault()
    //     let item = getRandom(this.props.state.superheros)
    //     this.props.fetchRandomName(item.name)
    // }

    // fetchSuffixOnClick=(e) => {
    //     e.preventDefault()
    //     let item = getRandom(this.props.state.superheros)
    //     this.props.fetchRandomSuffix(item.suffix)
    // }

    // fetchPowerOnClick=(e) => {
    //     e.preventDefault()
    //     let item = getRandom(this.props.state.superheros)
    //     this.props.fetchRandomPower(item.power)
    // }


    render() {
        
        return (
            <div className = 'sw-container'>
                <img src="https://www.pixel-creation.com/wp-content/uploads/sw-tfa-desktop-wallpaper-2560x1440-starwars.jpg" alt="starwars background"></img>
                <h1>A Long Time Ago In A Galaxy Far Far Away...Things Got Random!</h1>
                {/* <h2> {this.props.state.prefix} {this.props.state.name} {this.props.state.suffix}</h2>
                <h3>has the power of</h3> 
                <h2>{this.props.state.power}</h2>
                
                <button onClick={e => this.fetchPrefixOnClick(e)}>Change Prefix</button>
                <button onClick={e => this.fetchNameOnClick(e)}>Change    Name</button>
                <button onClick={e => this.fetchSuffixOnClick(e)}>Change Suffix</button>
                <button onClick={e => this.fetchPowerOnClick(e)}>Change Power</button> */}
                                
            </div>
        
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         state: state.superheros
//     }
// }

// export default connect(mapStateToProps, { fetchSuperheros, fetchRandomPrefix, fetchRandomName, fetchRandomSuffix, fetchRandomPower })(SuperHerosContainer)