import React from "react";
import { editNote } from '../actions';

class UpdateNoteForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      title: '',
      note: '',
    }
  }

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitChangeHandler = event => {
    event.preventDefault();
    const { id } = this.props.selected.id;
    this.props.editNote({id, ...this.state})
    this.setState({
      name: "",
      title: "",
      note: ""
    });
  };

  editNoteHandler = () => {

  }

  render() {
    return (
      <form>
        <input
          onChange={() => this.inputChangeHandler}
          placeholder={this.props.selected.name}
        />
        <input
          onChange={() => this.inputChangeHandler}
          placeholder={this.props.selected.title}
        />
        <input
          onChange={() => this.inputChangeHandler}
          placeholder={this.props.selected.note}
        />
        <button onClick={() => this.editNoteHandler}>{`Update ${
          this.props.selected.title
        }`}</button>
      </form>
    );
  }
}

export default UpdateNoteForm;
