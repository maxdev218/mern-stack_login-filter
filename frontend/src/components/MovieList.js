import React, { Component } from 'react';
import Loader from './Loader.js';
import MovieTile from './MovieTile.js';
import './MovieList.css';

/*
 * List of movies in the app.
 */
class MovieList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        // show results if app is not loading otherwise show loader
        let data = this.props.data;
        let isLoading = this.props.isLoading;
        let isDataEmpty = Object.entries(data).length === 0;
        let movieList = isLoading ? <Loader /> : isDataEmpty ? <div>No results.<br />Please try another search term.</div> :
            Object.entries(data).map((movie, index) => <MovieTile key={index} {...movie[1]} />);
        return (
            <div className='movieList'>{movieList}</div>
        );
    }
};

export default MovieList;

/*
 * Notes:
 * In the following code a spread operator is being used 
 * to pass all properties from object `movie[1]` to component `<MovieTile />`
 * <MovieTile key={index} {...movie[1]} />
 */
