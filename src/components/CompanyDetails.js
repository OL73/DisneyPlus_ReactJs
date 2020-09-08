import React, { Component } from 'react'
import Logo from './Logo'
import disney from './../companies/logo-disney.png'
import marvel from './../companies/logo-marvel.png'
import pixar from './../companies/logo-pixar.png'
import starwars from './../companies/logo-starwars.png'
import News from './News'
import './CompanyDetails.css'

export default class CompanyDetails extends Component {

    state = {
        companies: []
    }

    async getCompanyDetails(name) {
        let data = await fetch(`http://api.elorri.fr/disney-plus/company/${name}`).then(response => response.json());
        console.log(data);

        this.setState({
            companies: data
        });
    }

    componentDidMount() {
        this.getCompanyDetails(this.props.match.params.name);
    }

    getAllPictures() {
        let images = this.state.companies.map((image) => {
            return (
                <News
                    key={image.id}
                    id={image.id}
                    nouveaute={image.poster}
                    className="pictures-elt"
                />
            )
        });

        return images
    }

    /* getIdPicture() {
        let idPicture = this.state.company.map((image) => {
            return (image.id)
        });

        return idPicture
    } */

    getLogoCompany() {

        let name = this.props.match.params.name;
        
        if (name === 'disney') {
            name = disney
        } else if (name === 'marvel') {
            name = marvel
        } else if (name === 'pixar') {
            name = pixar
        } else if (name === 'starwars') {
            name = starwars
        }

        return name;
    }

    render() {

        return (
            <div className="company">
                <Logo />
                <div className="company-container">
                    <div className="company-header">
                        <img src={this.getLogoCompany()} alt="" />
                        <p>vous présente tout son catalogue</p>
                    </div>
                    <div className="pictures">
                        {this.getAllPictures()}
                    </div>
                </div>
            </div>
        );
    }
}
