import React from "react";
import HighSlider from "../components/HighSlider";
import Categories from "../components/Categories";
import "./Container.css";
export default function LeftContainer(props) {
	return (
		<div className="Main">
			<HighSlider setHighnessState={props.setHighnessState} />
			<Categories Highness={props.Highness} Genres={props.Genres} />
		</div>
	);
}
