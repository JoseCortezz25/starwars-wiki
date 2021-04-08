import React, { Component } from 'react'
import './styles/ListPeople.css'
import ItemPeople from '../components/ItemPeople'

export default class ListPeople extends Component {

        
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
            const response = await fetch(`${this.URL}people/`, this.options);
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

        return (
            <React.Fragment>
                <div className="container-general">
                    {this.state.data.results.map(people => {
                        return (
                            <ItemPeople people={people}/>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}
