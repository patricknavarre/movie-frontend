import React, { Component } from "react";
import axios from "axios";

export class Movie extends Component {

    state = {
        movieList: [],
        movieInput: "", 
        isToggle: false,
        updatedInput: "",
    };

    componentDidMount = async () => {
        try {
            let allMovie = await axios.get(
                "http://localhost:3001/movie/get-all-movie"
            );

            console.log(allMovie);

            this.setState({
                movieList: allMovie.data.data,
            });

        } catch (e) {
        console.log(e);
        }
    }

    handleMovieInputOnChange = (event) => {

        console.log(event.target.name);
 

        this.setState({
            [event.target.name]: event.target.value,
        });

        // this.setState({
        //     movieInput: event.target.value,
        // });
    }

    handleMovieSubmit =  async () => {
        try {

            let createdMovie = await axios.post(
                "http://localhost:3001/movie/create-movie",
                { movie: this.state.movieInput }
            );

            console.log(createdMovie);

            let newMovieList = [createdMovie.data.newMovie]

            this.setState({
                movieList: newMovieList,
            });
        } catch (e) {
            console.log(e);
        }
    }

    handleDeleteById = async (id) => {
        try {
          let deletedMovie = await axios.delete(
            "http://localhost:3001/movie/delete-movie",
            {
              data: { movieID: id },
            }
          );
    
        let newDeletedMovieArrayList = this.state.movieList.filter(
            (item) => item._id !== deletedMovie.data.data._id
        );
          
        this.setState({
            movieList: newDeletedMovieArrayList,
        });
        
        } catch (e) {
            console.log(e);
        }
      };

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

        <button style={{marginBottom: 10 }}onClick={this.handleMovieSubmit}>
        SUBMIT
        </button>

        <br />

        {this.state.movieList}
    </div>
    );
  }
}

export default Movie;
