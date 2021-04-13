import React from 'react'
import LeftContainer from './LeftContainer'
import MovieCard from '../components/MovieCard'

export default function MainContainer(props) {
    return (
        <div className='Main'>
            <LeftContainer Highness = {props.Highness} setHighnessState = {props.setHighnessState} />
            <MovieCard />
        </div>
    )
}
