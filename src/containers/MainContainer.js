import React from "react";
import LeftContainer from "./LeftContainer";
import MovieCard from "../components/MovieCard";
import "./Container.css";

export default function MainContainer(props) {
	return (
		<div>
			<LeftContainer
				Highness={props.Highness}
				setHighnessState={props.setHighnessState}
				Genres={props.Genres}
			/>
			{/* <MovieCard movie={props.SelectedMovie} /> */}
		</div>
	);
}
