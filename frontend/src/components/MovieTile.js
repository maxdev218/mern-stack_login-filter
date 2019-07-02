import React, { Component } from 'react';
import './MovieTile.css';

/*
 * Movie.
 */
class MovieTile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            // <div className='movieTile'>
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3 movieTile">
                    <div className="row one_div">
                        <div id="photo"></div>
                        <div className='sha_author'>                       
                            <div className='movieTile__sha'>
                                Sha : {this.props.sha}
                            </div>
                            
                            <div className='movieTile__author'>
                                Author : {this.props.commit.author.name}
                            </div>
                       </div>
                    </div>
                    <div className='movieTile__msg'>
                        Message : {this.props.commit.message}
                    </div>
                
                    <div className='movieTile__date'>
                        Date : {this.props.commit.author.date}
                    </div>
                </div>
            </div>
        );
    }
};

export default MovieTile;
