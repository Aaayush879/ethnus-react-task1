import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      birthDate: '',
      age: null,
    };
  }

  handleBirthDateChange = (e) => {
    this.setState({ birthDate: e.target.value });
  };

  calculateAge = () => {
    const birthDate = new Date(this.state.birthDate);
    const currentDate = new Date();

    if (!isNaN(birthDate)) {
      const ageInMilliseconds = currentDate - birthDate;
      const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
      const age = Math.floor(ageInYears);
      this.setState({ age });
    } else {
      this.setState({ age: null });
    }
  };

  render() {
    return (
      <div className="age-calculator">
        <h1>Age Calculator</h1>
        <div>
          <label>Enter your birthdate: </label>
          <input
            type="date"
            value={this.state.birthDate}
            onChange={this.handleBirthDateChange}
          />
        </div>
        <button onClick={this.calculateAge}>Calculate Age</button>
        {this.state.age !== null && (
          <p>Your age is: {this.state.age} years</p>
        )}
      </div>
    );
  }
}

export default App;
