import React from "react";

export default function MovieCard({ movie }) {
	return (
		<div>
			<img src={movie.image.medium} alt={movie.name} />
			<h2>{movie.name}</h2>
			<p>{movie.schedule.time} minutes / episode</p>
			{movie.summary}
		</div>
	);
}
