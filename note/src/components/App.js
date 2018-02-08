import React, { Component } from "react";
import "./App.css";
import NoteForm from "./NoteForm";
import NoteContainer from "./NoteContainer";
import { getNotes } from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="App">
        <NoteContainer notes={this.props.notes} />
        <NoteForm />
      </div>
    );
  }
}

App.defaultProps = {
  notes: [],
}

const MapStateToProps = state => {
  const { noteReducer } = state;
  return {
    notes: noteReducer.notes,
    error: noteReducer.error,
    fetchingNotes: noteReducer.fetchingNotes,
  }
}

export default connect(MapStateToProps, { getNotes })(App);
