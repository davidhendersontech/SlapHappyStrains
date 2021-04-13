import React from 'react'
import Genre from './Genre'


export default function Categories(props) {

    const getGenres = (highness) => {
        switch(highness){
            case 0:
                displayGenres(0);
                break;
            case 1:
                displayGenres(1);
                break;
            case 2: 
                displayGenres(2);
                break;
            case 3:
                displayGenres(3);
                break;
            case 4:
                displayGenres(4);
                break;
        }
    }

    
    const displayGenres = (level) => 
         props.Genres[level].map(genre => {
            return <Genre  genreName = {genre} />
            })
    
    return (
        <div>
            {displayGenres(props.Highness)}
        </div>
    )
}
