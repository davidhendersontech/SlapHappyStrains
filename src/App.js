import "./App.css";
import MainContainer from "./containers/MainContainer";
import React, { Component } from "react";

const ShowsURL = "http://api.tvmaze.com/shows";
const matchingMovies = [];

export default class App extends Component {
	state = {
		Highness: 0,
		Categories: [],
		ChosenCategory: [],
		SelectedMovie: [],
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

	setHighnessState = (value) => {
		this.setState({
			Highness: value,
		});
	};

	setMovie = () => {
		let item = Math.floor(Math.random() * matchingMovies.length);
		this.setState({
			SelectedMovie: matchingMovies[item],
		});
	};

	componentDidMount() {
		fetch(ShowsURL)
			.then((res) => res.json())
			.then((data) => {
				for (let key in this.state.Categories) {
					console.log(this.state.Categories[key]);
					// matchingMovies.push(data);
					// console.log(matchingMovies);
				}
			});
	}

	render() {
		return (
			<div>
				<MainContainer
					Highness={this.state.Highness}
					Categories={this.state.Categories}
					ChosenCategory={this.state.ChosenCategory}
					SelectedMovie={this.state.SelectedMovie}
					setHighnessState={this.setHighnessState}
					Genres={this.state.Genres}
				/>
			</div>
		);
	}
}
