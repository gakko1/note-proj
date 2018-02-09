import React from "react";
import { connect } from "react-redux";
import { editNote } from "../actions";
import './UpdateNoteForm.css';

class UpdateNoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      title: "",
      note: ""
    };
  }

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("STATE", this.state);
  };

  submitChangeHandler = event => {
    event.preventDefault();
    const id = this.props.selected.id;
    this.props.editNote({ id, ...this.state });
    this.setState({
      name: "",
      title: "",
      note: ""
    });
  };

  render() {
    return (
      <form className="UpdateNoteForm">
        <h4>...Or you can edit the contents of the note!</h4>
        <input
          onChange={this.inputChangeHandler}
          placeholder={this.props.selected.name}
          name="name"
        />
        <br />
        <input
          onChange={this.inputChangeHandler}
          placeholder={this.props.selected.title}
          name="title"
        />
        <br />
        <input
          onChange={this.inputChangeHandler}
          placeholder={this.props.selected.note}
          name="note"
        />
        <br />
        <button onClick={this.submitChangeHandler}>{`Update the post: ${
          this.props.selected.title
        }`}</button>
      </form>
    );
  }
}



export default connect(null, { editNote })(UpdateNoteForm);
