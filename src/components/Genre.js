import React from "react";

export default function Genre({ genreName, setChosenCategory, setMatchingMovies }) {

    const handleClick = () => {
        setChosenCategory(genreName);
        
    }

	return (
		<div>
			<button onClick={handleClick}>{genreName}</button>
		</div>
	);
}