import React, { Component } from 'react'
import './MovieDetails.css'
import Logo from './Logo'
import { PlusOutlined } from '@ant-design/icons'

class MovieDetails extends Component {

    state = {
        movie: {},
        myList: []
    }

    async getMovieDetails(id) {
        let data = await fetch(`http://api.elorri.fr/disney-plus/movie/${id}`).then(response => response.json());
        console.log(data);

        this.setState({
            movie: data
        });

    }

    componentDidMount() {
        this.getMovieDetails(this.props.match.params.id);
    }

    addToMYList() {

        console.log('film ajouté à ma liste');
        let copieDeMovie = { ...this.state.movie }
        let copieDeMyList = [...this.state.myList]

        copieDeMyList.push(copieDeMovie);

        let success = document.querySelector('.add-success');
        
        for (const film of copieDeMyList) {
            if (copieDeMovie.id === film.id) {
                success.innerHTML = `<p>${film.title} a été ajouté à votre liste</p>`
                success.style.display = 'block';
            }
        }

        this.setState({
            myList: copieDeMyList
        })

    }

    render() {
        return (
            <div>
                <Logo />
                <div className="movie-details">
                    <div className="medias-container">
                        <img src={this.state.movie.poster} alt="" />
                        {/* <video src={this.state.movie.video} controls></video> */}
                        <span><PlusOutlined className="plusoutlined" onClick={() => this.addToMYList()} /></span>
                        <iframe title={this.state.movie.title} src={this.state.movie.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>

                    <div className="movie-details-descriptions">
                        <h2>{this.state.movie.title}</h2>
                        <span>{this.state.movie.company}</span>
                        <p>{this.state.movie.description}</p>
                        <div className="add-success">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetails;
