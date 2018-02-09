import React from "react";
import "./SelectedNote.css";

const SelectedNote = props => {
  return (
    <div className="SelectedNote">
      <h4>Delete the selected post, clear choice by pressing the 'X'.</h4>
      <span onClick={() => props.showNoteHandler({})}> X </span>
      <div className="SelectedNote__contents">
        <h4>{props.selected.name}</h4>
        <h5 className="SelectedNote__contents--title">{props.selected.title}</h5>
        <div className="SelectedNote__contents--body">{props.selected.note}</div>
      </div>
      <button onClick={() => props.deleteNoteHandler()}>{`Delete ${
        props.selected.name
      }'s post`}</button>
    </div>
  );
};

export default SelectedNote;
