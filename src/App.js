import React, { Component } from "react";
import DateInput from "./components/DateInput";
import Photo from "./components/Photo.js";
import './App.css';

class App extends Component {
  state = {
    date: "",
    Photo: "",
    likes: 0,
    upadated: false
  };

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=Ngck6q0tZAHJAEpblWg2TXgQbWlJ8kP3onxPmlCZ`)
      .then(response => response.json())
      .then(json => this.setState({ Photo:json }));
  };

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=Ngck6q0tZAHJAEpblWg2TXgQbWlJ8kP3onxPmlCZ`)
      .then(response => response.json())
      .then(photoData => this.setState({ Photo: photoData }));
  };

  
  updateLikes = () => {

    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });

    } else {

      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });

    }
  }

 

  changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
    this.getPhoto(dateFromInput);
  };

  render() {
    return (
      <div className= "apod">
        <div className="apod-title">
          <h1 className="title">NASA's Astronomy Picture of the Day</h1>
          <DateInput changeDate={this.changeDate}
          date={this.state.date}
          />
         </div>
         
        <Photo className="img" photo={this.state.Photo} />
        <button className="like-btn" onClick={this.updateLikes}>Likes: {this.state.likes} </button>         
      </div>
    );
  }
}
export default App;
