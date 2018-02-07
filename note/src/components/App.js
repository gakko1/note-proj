import React, { Component } from "react";
import "./App.css";
import noteForm from "./noteForm";
import noteContainer from "./noteContainer";
import { getNotes } from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="App">
        <noteContainer />
        <noteForm />
      </div>
    );
  }
}

App.defaultProps = {
  notes: [],
}

const MapStateToProps = state => {
  return {
    notes: props.notes,
  }
}

export default connect(MapStateToProps, { getNotes })(App);
