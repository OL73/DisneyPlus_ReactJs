import React, { Component } from 'react';
import Logo from './components/Logo'
import './App.css'
import Compagnies from './components/Compagnies';
import disney from './companies/logo-disney.png'
import marvel from './companies/logo-marvel.png'
import pixar from './companies/logo-pixar.png'
import starwars from './companies/logo-starwars.png'
import News from './components/News';
import Cover from './components/Cover';
import { Skeleton } from 'antd';

class App extends Component {

  state = {
    movies: [],
    loading: true
  }

  async getMovies() {

    let data = await fetch('http://api.elorri.fr/disney-plus/movies').then(response => response.json());
    console.log(data);

    this.setState({
      movies: data
    });

  }

  componentDidMount() {
    this.getMovies();
  }

  /* addAllNewOne() {
    let copieNewOne = [...this.state.newOne];
    let sliceTab = []

    this.state.movies.forEach((nouveau) => {
      if (nouveau.releaseDate > '2018-01-01') {

        copieNewOne.push(nouveau.poster)

      }
    })

    sliceTab = copieNewOne.slice(0, 6);
    console.table(sliceTab);

    this.setState({
      newOne: sliceTab
    });
  } */

  render() {

    let cover = this.state.movies.map((cover, props) => {

      if (cover.highlighted) {
        return (
          <img
            key={cover.id}
            src={cover.cover}
            alt="cover"
            className="shadow"
          />
        )
      }

    });

    // 6 nouveautés
    let sliceTab = [];
    let newAll = [];

    this.state.movies.forEach((nouveau) => {

      if (Date.parse(nouveau.releaseDate) > Date.parse('2018-01-01')) {
        newAll.push(nouveau);
      }

      sliceTab = newAll.slice(0, 6);

    });

    newAll = sliceTab;

    let nouveautes = newAll.map((nouveau) => {
      return (
        <News
          key={Math.random()}
          nouveaute={nouveau.poster}
          id={nouveau.id}
        />
      )
    });

    // id au hasard
    let coverId = [];
    let suggestion = [];
    this.state.movies.forEach((cover) => {

      coverId.push(cover.id);

    });

    for (let i = 0; i < 3; i++) {

      suggestion[i] = coverId[Math.floor(Math.random() * coverId.length)];
    }

    let suggestions = this.state.movies.map((cover) => {

      for (let i = 0; i < suggestion.length; i++) {

        if (suggestion[i] === cover.id) {
          return (
            <Cover
              key={cover.id}
              coverRandom={cover.cover}
              id={cover.id}
            />
          )
        }
      }
    })

    /* if (this.state.loading) {
      return (
        <Skeleton active />
      )
    } else { */

      return (
        <div className="App">

          <Logo />

          <section id="cover">
            {/* passer une props à une balise jsx */}
            {cover}
          </section>

          <section id="compagnies">
            <Compagnies
              compagnie={disney}
              companyName={`disney`}
            />
            <Compagnies
              compagnie={marvel}
              companyName={`marvel`}
            />
            <Compagnies
              compagnie={pixar}
              companyName={`pixar`}
            />
            <Compagnies
              compagnie={starwars}
              companyName={`starwars`}
            />
          </section>

          <section id="nouveautes">
            <h3 className="section-title">Nouveautés</h3>
            <div>
              {nouveautes}
            </div>
          </section>

          <section id="suggestions">
            <h3 className="section-title">Suggestions</h3>
            <div>
              {suggestions}
            </div>
          </section>

        </div>
      );
    /* } */

  }
}

export default App;
