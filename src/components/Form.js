import React, { Component } from 'react';
import './Form.css';

const startState = {
  name: '',
  message: '',
  castleName: '',
  dateCalendar: '',
  select: '',
  nameError: '',
  castleError: '',
  messageError: '',
  selectError: '',
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = startState;
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleSelectChange = (event) => {
    this.setState({
      select: event.target.value,
    });
  };

  handleFocus = (event) => {
    this.setState({ select: null });
  };

  handleCastleChange = (event) => {
    this.setState({
      castleName: event.target.value,
    });
  };

  validation = () => {
    let nameError = '';
    let castleError = '';
    let messageError = '';
    let selectError = '';

    if (!this.state.name) {
      nameError = 'Enter your nickname';
    }
    if (!this.state.message) {
      messageError = 'Enter a comment ';
    }
    if (!this.state.castleName) {
      castleError = 'Enter the name of the Castle';
    }
    if (!this.state.selectError) {
      selectError = '';
    }
    if (castleError || nameError || messageError || selectError) {
      this.setState({ castleError, nameError, messageError, selectError });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    alert('Good Luck');
    event.preventDefault();
    const isValid = this.validation();
    if (isValid) {
      // clear form
      this.setState(startState);
    }
  };

  render() {
    return (
      <div className='form-wrapper'>
        <form id='contact' onSubmit={this.handleSubmit}>
          <h2 className='title'> Who's Next ? </h2>
          <div>
            <label htmlFor='inputName'>
              Alias
              <input
                className={`${this.state.nameError !== '' ? 'red' : ''}`}
                type='text'
                value={this.state.name}
                onChange={this.handleNameChange}
                id='inputName'
                placeholder={this.state.nameError}
              />
            </label>
          </div>
          <div>
            <label htmlFor='inputName'>
              Castle's Name
              <input
                className={`${this.state.castleError !== '' ? 'red' : ''}`}
                type='text'
                value={this.state.castleName}
                onChange={this.handleCastleChange}
                id='inputName'
                placeholder={this.state.castleError}
              />
            </label>
          </div>
          <div>
            <label htmlFor='inputSelect'>
              Choose your Method (optional):
              <select
                id='inputSelect'
                value={this.state.select}
                onChange={this.handleSelectChange}
                className={`${this.state.selectError !== '' ? 'red' : ''}`}
              >
                <option value='start'>Select</option>
                <option value='grapefruit'>Guillotine </option>
                <option value='lime'>Burning</option>
                <option value='coconut'>Crushing</option>
                <option value='mango'>Hanging</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor='inputMessage'>
              Description:
              <textarea
                className={`${this.state.messageError !== '' ? 'red' : ''}`}
                value={this.state.message}
                onChange={this.handleMessageChange}
                id='inputMessage'
                placeholder={this.state.messageError}
              />
            </label>
          </div>
          <div className='button-div'>
            <button type='submit'>Let's go </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
