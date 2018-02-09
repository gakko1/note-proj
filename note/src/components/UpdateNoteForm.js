import React from "react";
import { connect } from "react-redux";
import { editNote } from "../actions";

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
      <form>
        <input
          onChange={this.inputChangeHandler}
          placeholder={this.props.selected.name}
          name="name"
        />
        <input
          onChange={this.inputChangeHandler}
          placeholder={this.props.selected.title}
          name="title"
        />
        <input
          onChange={this.inputChangeHandler}
          placeholder={this.props.selected.note}
          name="note"
        />
        <button onClick={this.submitChangeHandler}>{`Update ${
          this.props.selected.title
        }`}</button>
      </form>
    );
  }
}



export default connect(null, { editNote })(UpdateNoteForm);
