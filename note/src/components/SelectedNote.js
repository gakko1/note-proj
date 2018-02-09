import React from "react";
import "./SelectedNote.css";

const SelectedNote = props => {
  return (
    <div className="SelectedNote">
      <span onClick={() => props.showNoteHandler({})}> X </span>
      <h5>{props.selected.name}</h5>
      <div>{props.selected.title}</div>
      <div>{props.selected.note}</div>
      <button onClick={() => props.deleteNoteHandler()}>{`Delete ${
        props.selected.name
      }`}</button>
    </div>
  );
};

export default SelectedNote;
