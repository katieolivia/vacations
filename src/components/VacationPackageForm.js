import React, { Component } from 'react';
import axios from 'axios';

export default class VactionPackageForm extends Component {
    constructor() {
        super();

        this.state = {
            vacationPackage: {
                location: '',
                type: '',
                days: '',
                imageUrl: '',
                description: ''
            }
        }
    }
//target refers to element the change happened on, event is the change
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        let newVacationPackage = Object.assign({}, this.state.vacationPackage)
//name isn't a property on string, its a variable tied to each input. in the first input name will be location. because its a string we need to use bracket notation.
        newVacationPackage[name] = value;

        this.setState({
            vacationPackage: newVacationPackage
        })

    }
    //second arg on a post request (we pass as on object) is req.body
    handleSubmit = () => {
        axios.post('http://localhost:3005/packages', this.state.vacationPackage).then((res) => {
            console.log('res', res);
            this.props.updateParentList(res.data);
        })
    }


    render() {
        return (
            <div>
                <input 
                    name="location" 
                    value={this.state.vacationPackage.location} 
                    placeholder="location" 
                    onChange={this.handleChange}/>

                <input 
                    name="type" 
                    value={this.state.vacationPackage.type} 
                    placeholder="type"
                    onChange={this.handleChange} />

                <input 
                    name="days" 
                    value={this.state.vacationPackage.days} 
                    placeholder="days"
                    onChange={this.handleChange} />

                <input 
                    name="imageUrl" 
                    value={this.state.vacationPackage.imageUrl} 
                    placeholder="imageUrl"
                    onChange={this.handleChange} />

                <textarea 
                name="description" 
                value={this.state.vacationPackage.description} 
                placeholder="description"
                onChange={this.handleChange} />

                <button onClick={this.handleSubmit}>create vacation</button>

            </div>
        )
    }
}