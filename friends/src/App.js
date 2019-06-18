import './App.css';

import axios from 'axios';
import React from 'react';

import FormInput from './Components/Form';
import List from './Components/List';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      friends: [],
      nameValue: '',
      ageValue: '',
      emailValue: '',
      nameUpdate: '',
      ageUpdate: '',
      emailUpdate: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({
        friends: response.data
      }))
      .catch(err => console.log(err));
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitForm = event => {
    event.preventDefault();
    const newObj = {
      name: this.state.nameValue,
      age: this.state.ageValue,
      email: this.state.emailValue,
    };
    axios.post("http://localhost:5000/friends", newObj)
      .then(res => this.setState({
        friends: res.data,
        nameValue: '',
        ageValue: '',
        emailValue: ''
      }))
      .catch(err => console.log(err));
  }

  delete = (event, id) => {
    event.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({
        friends: res.data,
      }))
      .catch(err => console.log(err))
  }

  updateForm = (event, id) => {
    event.preventDefault();
    console.log(id);

    const newObj = {
      name: this.state.nameValue,
      age: this.state.ageValue,
      email: this.state.emailValue,
    };
    axios.put(`http://localhost:5000/friends/${id}`, newObj)
      .then(res => this.setState({
        friends: res.data,
        nameUpdate: '',
        ageUpdate: '',
        emailUpdate: ''
      }))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App" >
        <List friends={this.state.friends} delete={this.delete} updateForm={this.updateForm} handleChange={this.handleChange}
        // emailUpdate={this.state.emailValue}
        // ageUpdate={this.state.ageValue}
        // nameUpdate={this.state.nameValue}
        />
        <FormInput
          handleChange={this.handleChange}
          emailValue={this.state.emailValue}
          ageValue={this.state.ageValue}
          nameValue={this.state.nameValue}
          submitForm={this.submitForm}
        />
      </div>
    )
  };

}

export default App;
