import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const NOTES_FETCHED = 'NOTES_FETCHED';
export const CREATING_NOTE = 'CREATING_NOTE';
export const NOTE_CREATED = 'NOTE_CREATED';
export const DELETING_NOTE = 'DELETING_NOTE';
export const NOTE_DELETED = 'NOTE_DELETED';
export const EDITING_NOTE = 'EDITING_NOTE';
export const NOTE_EDITED = 'NOTE_EDITED';
export const ERROR = 'ERROR';


export const getNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });
    axios.get('https://my.api.mockaroo.com/notes.json?key=23d7eeb0')
    .then(({data}) => {
      dispatch({ type: NOTES_FETCHED, payload: data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    })
  }
}

export const createNote = (note) => {
  return dispatch => {
    dispatch({ type: CREATING_NOTE });
    axios.post('https://my.api.mockaroo.com/notes.json?key=23d7eeb0&__method=POST', note)
    .then(({data}) => {
      dispatch({ type: NOTE_CREATED, payload: data });
    })
    .then(() => {
      dispatch({ type: FETCHING_NOTES })
      axios.get('https://my.api.mockaroo.com/notes.json?key=23d7eeb0')
      .then(({data}) => {
        dispatch({ type: NOTES_FETCHED, payload: data })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err})
      })
    })
    .catch(err => console.error(err));
  }
}