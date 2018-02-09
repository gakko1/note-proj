import React from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getNotes, deleteNote, updateNote, toggleShowUpdate } from "../actions";
import "./NoteContainer.css";
import UpdateNoteForm from "./UpdateNoteForm";
import SelectedNote from "./SelectedNote";

class NoteContainer extends React.Component {
  deleteNoteHandler = () => {
    const { id } = this.props.noteSelected;
    this.props.deleteNote(id);
  };

  showNoteHandler = note => {
    this.props.updateNote(note);
  };

  toggleShowUpdate = () => {
    this.props.toggleShowUpdate();
  };

  render() {
    console.log("PROPS", this.props);
    return (
      <div>
        <h1>THESE ARE THE NOTES AVAILABLE</h1>
        <ul className="NoteList">
          {this.props.notes.map(item => {
            return (
              <li
                key={item.id}
                onClick={() => this.showNoteHandler(item)}
                className="NoteList__items"
              >
                {/* <Link to={'./notes/' + item} component={notes.item}>{item.id}</Link>
                <Route path={'./notes/' + item} component={notes.item} /> */}
                <div>
                  <h2>{item.name}</h2>
                  <h4>{item.title}</h4>
                  <div className="NoteList__body">
                    <p>{item.note}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <SelectedNote
          showNoteHandler={this.showNoteHandler}
          toggleShowUpdate={this.toggleShowUpdate}
          deleteNoteHandler={this.deleteNoteHandler}
          selected={this.props.noteSelected}
        />
        <UpdateNoteForm selected={this.props.noteSelected} />
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    deletingNote: state.noteReducer.deletingNote,
    showUpdate: state.noteReducer.showUpdate,
    noteSelected: state.noteReducer.noteSelected,
    error: state.noteReducer.error
  };
};

export default connect(MapStateToProps, {
  getNotes,
  updateNote,
  deleteNote,
  toggleShowUpdate
})(NoteContainer);
