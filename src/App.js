import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: "",
    favoritePet: "",
    rememberMe: false,
    title: "Miss",
    range: ""
  }

  handleChange = (e) => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="App">
        <h1>Form Demo</h1>
  <br/>

        <input 
          name="name"
          value={this.state.name} 
          onChange={this.handleChange} 
        />
  <br/>
  <br/>
        <textarea 
          name="favoritePet"
          value={this.state.favoritePet} 
          onChange={this.handleChange} 
        />
  <br/>

        <input 
          name="rememberMe"
          type="checkbox" 
          value={this.state.rememberMe} 
          onChange={this.handleChange} 
        />
  <br/>

        <input 
          name="range"
          min="0"
          max="100"
          value={this.state.range}
          type="range" 
          onChange={this.handleChange}
        />
        <p>rangeValue: {this.state.range}</p>
        <br/>

        <div>
          <select 
            name="title"
            value={this.state.title} 
            onChange={this.handleChange} >
              <option>Mr.</option>
              <option>Miss.</option>
              <option>Ms.</option>
              <option>Mrs.</option>
          </select>
        </div>
  <br/>

        <button type="submit">submit</button>
      </form>
    );
  }
}

export default App;
