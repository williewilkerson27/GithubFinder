import React, { Component } from 'react'

class Search extends Component {
// This sets the text to whatever you type in the searchbar
    state = {
        text: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text)
    } 

// onChange sets the state, also allows you to type in the search bar. 
// you need onChange because the state wont change unless you set this    
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'> 
                    <input type='text' name='text' placeholder="Search Github Users..." value={this.state.text} onChange={this.onChange} />
                    <input type='submit' value='Search' className='btn btn-primary btn-block'  />
                </form>
            </div>
        )
    }
}

export default Search
