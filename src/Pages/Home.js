import React, { Component } from 'react'
import './styles/Home.css'
import CardButton from '../components/CardButton'

export default class Home extends Component {
    render() {
        return (
            <div className="container-home">
                <p className="title-h3">What do you want to know?</p>

                <div className="container-buttons">
                    <CardButton path="planets" title="Planets"/>
                    <CardButton path="people" title="People"/>

                </div>
            </div>
        )
    }
}
