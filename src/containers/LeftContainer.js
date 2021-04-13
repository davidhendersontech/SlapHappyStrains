import React from 'react'
import HighSlider from '../components/HighSlider'
import Categories from '../components/Categories'
export default function LeftContainer(props) {
    return (
        <div>
            <HighSlider setHighnessState = {props.setHighnessState}/>
            <Categories Highness = {props.Highness} Genres = {props.Genres}/>
        </div>
    )
}
