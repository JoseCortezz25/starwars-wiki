import React, { Component } from 'react'
import './styles/ListPlanets.css'
import ItemPlanet from '../components/ItemPlanet'

export default class ListPlanets extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: undefined
        }
        this.URL = 'https://swapi.dev/api/';
        this.options = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () =>{
        this.setState({loading: true, error: null})

        try {
            const response = await fetch(`${this.URL}planets/`, this.options);
            const data = await response.json();
            this.setState({loading: false, data: data})
            
        } catch (error) {
            this.setState({loading: false, error: error})
        }
        
    }
    
    render() {
        if(this.state.loading === true && !this.state.data){
            return <h2>Loading...</h2>
        }

        if(this.state.error){
            return <h2>Not found</h2>
        }

        console.log(this.state.data);
        return (
            <React.Fragment>
                <div className="container-general">
                    {this.state.data.results.map(planet => {
                        return (
                            <ItemPlanet planet={planet}/>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}
