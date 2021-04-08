import React, { Component } from 'react'
import './styles/ItemPlanet.css'

export default class ItemPlanet extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <li className="item"> 
                <h2>{ this.props.planet.name }</h2>
                <p>Climate: {this.props.planet.climate }</p>
                <p>Terrain: {this.props.planet.terrain }</p>
                <p>Population: {this.props.planet.population }</p>
            </li>
        )
    }
}
