import React from 'react'
import LeftContainer from './LeftContainer'
import MovieCard from '../components/MovieCard'

export default function MainContainer(props) {

    

    return (
        <div className='Main'>
            <LeftContainer 
            Highness = {props.Highness}
            Genres = {props.Genres} 
            setHighnessState = {props.setHighnessState}
            setChosenCategory={props.setChosenCategory}
            setMatchingMovies={props.setMatchingMovies}
            />
            <MovieCard SelectedMovie = {props.SelectedMovie} />
        </div>
    )
}
