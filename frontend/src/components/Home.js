import React, { Component } from 'react';
import MovieList from './MovieList.js';
import SearchInput from './SearchInput.js';
import Users from './Users';
import './Home.css';

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          ui: {
            isLoading: true
          },
          data: {},
          dataFiltered: {}
        };
        if(!localStorage.jwtToken){                
          this.props.history.push('/login');
        }
    
        this.filterData = this.filterData.bind(this);
      }
      filterData(value) {
        // filter movies by title
        let data = Object.assign({}, this.state.data);
        let dataFiltered = Object.values(data).filter(movie => movie.commit.author.name.match(new RegExp(value, 'i')));
        this.setState({ dataFiltered });
      }
      componentDidMount() {
        // load data source
        fetch('https://api.github.com/repos/angular/angular/commits').then(response => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ', response.status);
            return;
          }
          response.json().then(data => {         
            this.setState({
              ui: {
                isLoading: false
              },
              data,
              dataFiltered: data
            });
          });
        }).catch(error => {
          console.log('Error with fetch', error);
        });
      }
      render() {
        return (
          <div className="Home">
            <div className="app__header">
               <div class="header_text">Dashboard</div>
              <SearchInput
                filterData={this.filterData}
              />
            </div>
            <div className="row">
              <div className="col-md-8 col-sm-12">              
                <MovieList
                  isLoading={this.state.ui.isLoading}
                  data={this.state.dataFiltered}
                />
              </div>
              <div className="col-md-4 col-sm-12">
                <Users />
              </div>
            </div>
          </div>
        );
      }
}