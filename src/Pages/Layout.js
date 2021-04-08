import React, { Component } from 'react'
import Header from '../components/Header'


export default function Layout(props) {
    return (
        <React.Fragment>
            <Header/>
            {props.children}
        </React.Fragment>
    )
}
