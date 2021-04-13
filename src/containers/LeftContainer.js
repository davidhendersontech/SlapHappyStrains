import React from 'react'
import HighSlider from '../components/HighSlider'
import Categories from '../components/Categories'
export default function LeftContainer(props) {
    return (
        <div className="sub">
            <HighSlider setHighnessState = {props.setHighnessState}/>
            <Categories Highness = {props.Highness} Genres = {props.Genres} setChosenCategory={props.setChosenCategory} 
            setMatchingMovies={props.setMatchingMovies}
            />
        </div>
    )
}
