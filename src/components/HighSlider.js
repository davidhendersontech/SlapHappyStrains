import React from 'react'

export default function HighSlider(props) {

    const clickHandler = (event) => {
        props.setHighnessState(parseInt(event.target.value))
        
    }

    return (
        <div>
            <button onClick={clickHandler} value="0">Underdone</button>
            <button onClick={clickHandler} value="1" >Doughy</button>
            <button onClick={clickHandler} value="2">Baked</button>
            <button onClick={clickHandler} value="3">Golden Brown</button>
            <button onClick={clickHandler} value="4">Totally Burnt</button>
        </div>
    )
}
