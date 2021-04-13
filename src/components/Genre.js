import React from "react";
import "../App.css";
export default function Genre({ genreName }) {
	return (
		<div className="genre-div">
			<button>{genreName}</button>
		</div>
	);
}
