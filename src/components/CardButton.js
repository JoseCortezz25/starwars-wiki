import React from 'react'
import { Link } from 'react-router-dom'
import './styles/CardButton.css'

export default function Card(props) {
    return (
        <Link className="link card" to={`/${props.path}`}>
            <div className="">
                    <p className="title-card"> { props.title } </p>
            </div>
        </Link>
    )
}
