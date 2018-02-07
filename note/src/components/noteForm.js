import React, { Component } from "react";
import { connect } from "react-redux";

class noteForm extends Component {
  state = {
    name: "",
    title: "",
    note: ""
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitChangeHandler = event => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      name: "",
      title: "",
      note: ""
    });
  };

  render() {
    return (
      <div className="noteForm">
        <form onSubmit={this.submitChangeHandler}>
          <input
            onChange={this.inputChangeHandler}
            placeholder="name"
            name="name"
            value={this.state.name}
          />
          <input
            onChange={this.inputChangeHandler}
            placeholder="title"
            name="title"
            value={this.state.title}
          />
          <input
            onChange={this.inputChangeHandler}
            placeholder="note text"
            name="note"
            value={this.state.note}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
