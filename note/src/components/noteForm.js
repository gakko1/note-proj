import React, { Component } from "react";
import { connect } from "react-redux";
import { createNote } from "../actions";

class NoteForm extends Component {
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
    this.props.createNote(this.state);
    this.setState({
      name: "",
      title: "",
      note: ""
    });
  };

  render() {
    return (
      <div className="noteForm">
        Add a new note:
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

export default connect(null, { createNote })(NoteForm);
