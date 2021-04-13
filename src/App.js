import './App.css';
import MainContainer from './containers/MainContainer'
import React, { Component } from 'react'

const ShowsURL = 'http://api.tvmaze.com/shows/1'

export default class App extends Component {


  state = {
    Highness: 0,
    Categories: [],
    ChosenCategory: [],
    SelectedMovie: []
  }

  setHighnessState = (value) => {
    this.setState({
      Highness : value
    })
  }


  componentDidMount(){
    fetch(ShowsURL)
      .then(res => res.json())
      .then(console.log)
  }

  render() {
    return (
      <div>
        <MainContainer className="main-container"
        Highness = {this.state.Highness} 
        Categories = {this.state.Categories}
        ChosenCategory = {this.state.ChosenCategory}
        SelectedMovie = {this.state.SelectedMovie}
        setHighnessState = {this.setHighnessState}
        />
      </div>
    )
  }
}
