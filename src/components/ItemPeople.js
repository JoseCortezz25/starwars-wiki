import React, { Component } from 'react'
import './styles/ItemPlanet.css'

export default class ItemPlanet extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <li className="item"> 
                <h2>{ this.props.people.name }</h2>
                <p>Height: {this.props.people.height }</p>
                <p>Birth Year: {this.props.people.birth_year }</p>
                <p>Gender: {this.props.people.gender }</p>
            </li>
        )
    }
}
