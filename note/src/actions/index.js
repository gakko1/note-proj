import axios from "axios";

export const FETCHING_NOTES = "FETCHING_NOTES";
export const NOTES_FETCHED = "NOTES_FETCHED";
export const CREATING_NOTE = "CREATING_NOTE";
export const NOTE_CREATED = "NOTE_CREATED";
export const DELETING_NOTE = "DELETING_NOTE";
export const NOTE_DELETED = "NOTE_DELETED";
export const EDITING_NOTE = "EDITING_NOTE";
export const NOTE_EDITED = "NOTE_EDITED";
export const SINGLE_NOTE = "SINGLE_NOTE";
export const TOGGLE_UPDATE_NOTE = "TOGGLE_UPDATE_NOTE";
export const ERROR = "ERROR";

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });
    axios
      .get("http://localhost:3000/users")
      .then(({ data }) => {
        dispatch({ type: NOTES_FETCHED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const createNote = note => {
  return dispatch => {
    dispatch({ type: CREATING_NOTE });
    axios
      .post("http://localhost:3000/users", note)
      .then(({ data }) => {
        dispatch({ type: NOTE_CREATED, payload: data });
      })
      .then(() => {
        dispatch({ type: FETCHING_NOTES });
        axios
          .get("http://localhost:3000/users")
          .then(({ data }) => {
            dispatch({ type: NOTES_FETCHED, payload: data });
          })
          .catch(err => {
            dispatch({ type: ERROR, payload: err });
          });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const deleteNote = id => {
  return dispatch => {
    dispatch({ type: DELETING_NOTE });
    axios
      .delete(`http://localhost:3000/users/${id}`, { data: { id } })
      .then(({ data }) => {
        dispatch({ type: NOTE_DELETED, payload: data });
        dispatch({ type: SINGLE_NOTE, payload: {} });
        axios.get('http://localhost:3000/users')
        .then(({ data }) => {
          dispatch({ type: NOTES_FETCHED, payload: data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const toggleShowUpdate = () => {
  return {
    type: TOGGLE_UPDATE_NOTE
  };
};

export const updateNote = note => {
  return {
    type: SINGLE_NOTE,
    payload: note
  };
};

export const editNote = ({ id, name, title, note }) => {
  return dispatch => {
    dispatch({ type: EDITING_NOTE });
    axios.patch(`http://localhost:3000/users/${id}`, { name, title, note })
    .then(({ data }) => {
      dispatch({ type: NOTE_EDITED, payload: data });
      axios.get('http://localhost:3000/users')
      .then(({ data }) => {
        dispatch({ type: NOTES_FETCHED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      })
    })
    .catch(({err}) => {
      dispatch({ type: ERROR, payload: err });
    })
  }
}
