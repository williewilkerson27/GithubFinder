import React, { Component } from 'react'
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
// we will set the loading to false because if the data isnt loaded then we can show it through frontend    
    loading: false
  }


  async componentDidMount() {
// this will set loading to true    
    this.setState({ loading: true })
// axios will help us extract users from this api,

    const res = await axios.get(`https://api.github.com/users?client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data, loading: false })
}

render() {
  return (
    <div className="App">
      <Navbar />  
    <div className="container">
{/* we are passing in loading & users from the state,
we are passing it in as props */}
      <Search />
      <Users loading={this.state.loading} users={this.state.users} />
    </div>  
    </div>
  );
  } 
}

export default App;
