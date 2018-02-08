import React from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getNotes } from "../actions";
import "./NoteContainer.css";

class NoteContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>THESE ARE THE NOTES AVAILABLE</h1>
        <ul className="NoteList">
          {this.props.notes.map((item, i) => {
            return (
              <li key={i} className="NoteList__items">
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
      </div>
    );
  }
}

export default connect(null, { getNotes })(NoteContainer);
