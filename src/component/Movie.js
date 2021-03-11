import React, { Component } from "react";
import axios from "axios";

export class Movie extends Component {

    state = {
        movieInput: ""
    }

    handleMovieInputOnChange = (event) => {

        console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value,
        });

        this.setState({
            movieInput: event.target.value,
        });
    }

  render() {
    return (
      <div style={{ marginTop: 20, textAlign: "center" }}>
        <div style={{ marginTop: 20 }}>
          <input 
          type="text" 
          name="movieInput" 
          value={this.state.movieInput}
          onChange={this.handleMovieInputOnChange}
        />
        </div>

        <br />

        <button>SUBMIT</button>
      </div>
    );
  }
}

export default Movie;
