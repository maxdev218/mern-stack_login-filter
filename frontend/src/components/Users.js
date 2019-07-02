import React, { Component } from 'react';
import store from '../store';
import { list, logoutUser } from '../actions/authentication';

class Users extends Component {

    constructor() {
        super();
        this.state = {
          term: "",
          items: []
        };
        const user = {

        }
        if(!localStorage.jwtToken){        
          // window.location.href = '/login'
        }
        list(user).then(data => {
          this.setState({
              term: "",
              items: data.data
          },
          () => {
          });
        });
    }

    render() {
        return (
            <div className="project-list section">
                <h1>User List</h1>
                <div className="project-list section">
                    {this.state.items.map((item, index) => (
                      <div className="card z-depth-0 project-summary" id="userlist">
                        <p id="sha">{item.email}</p>                    
                      </div>
                    ))} 
                </div>
            </div>
        )
    }
}

export default Users;