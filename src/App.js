import "./App.css";
import MainContainer from "./containers/MainContainer";
import React, { Component } from "react";

const ShowsURL = "http://api.tvmaze.com/shows";
const DefaultShow = "http://api.tvmaze.com/shows/1"
const matchingMovies = [];

export default class App extends Component {
	state = {
		Highness: 0,
		Categories: [],
		ChosenCategory: "",
    Movies: [],
		SelectedMovie: [],
    MatchingMovies: [],
		Genres: {
			0: ["Crime", "DIY", "Horror"],
			1: ["Adventure", "Drama", "History", "Medical", "Super-Natural"],
			2: [
				"Action",
				"History",
				"Mystery",
				"Nature",
				"Science-Fiction",
				"Super-Natural",
			],
			3: [
				"Comedy",
				"Food",
				"Mystery",
				"Nature",
				"Science-Fiction",
				"Thriller",
				"Travel",
			],
			4: [
				"Anime",
				"Children",
				"Fantasy",
				"ood",
				"Nature",
				"Science-Fiction",
				"Thrillers",
			],
		},
	};

  setMatchingMovies = (category) => {
    const filteredMovies = this.state.Movies.filter(movie => {
      return movie.genres.includes(category)
    })
    this.setState({
      MatchingMovies : filteredMovies
    })
  }

	setHighnessState = (value) => {
		this.setState({
			Highness: value,
		});
	};

  setChosenCategory = (category) => {
    this.setMatchingMovies(category);
    let index = Math.floor(Math.random() * this.state.MatchingMovies.length)
    
    this.setState({
      ChosenCategory :  category,
      SelectedMovie : this.state.MatchingMovies[index]
    })
  }


	componentDidMount() {
		fetch(ShowsURL)
			.then((res) => res.json())
			.then((data) => {
          this.setState({
            Movies : data
          })
			});
      fetch(DefaultShow)
        .then(res => res.json())
        .then(data => {
          this.setState({
            SelectedMovie: data
          })
        })
    
	}

	render() {
		return (
			<div>
        
				<MainContainer
					className="main-container"
					Highness={this.state.Highness}
					Categories={this.state.Categories}
					ChosenCategory={this.state.ChosenCategory}
					SelectedMovie={this.state.SelectedMovie}
          setMatchingMovies={this.setMatchingMovies}
					setHighnessState={this.setHighnessState}
          setChosenCategory={this.setChosenCategory}
					Genres={this.state.Genres}
				/>
			</div>
		);
	}
}
