import React, { Component } from 'react';
import axios from 'axios';
import VacationPackageForm from './VacationPackageForm';
import VacationPackagesList from './VacationPackagesList';



export default class VacationPackages extends Component {
    constructor() {
        super();
    this.state = {
        vacationPackages: []
    }
}

componentDidMount() {
    this.getVacations();
}

getVacations = (vacations) => {
    axios.get('http://localhost:3005/packages').then((res) => {
        this.setState({ vacationPackages: res.data })
    })
}
removeVacation =(id) => {
    axios.delete(`http://localhost:3005/packages/${id}`).then((res) => {
        this.getVacations();
    })
}
    render() {
        return (
            <div>
                <VacationPackageForm updateParentList={this.getVacations}/>
                <VacationPackagesList vacationPackages={this.state.vacationPackages} removeVacation={this.removeVacation}/>
            </div>
        )
    }
}