import {FETCHING_NOTES, NOTES_FETCHED, CREATING_NOTE, NOTE_CREATED, DELETING_NOTE, NOTE_DELETED, EDITING_NOTE, NOTE_EDITED, ERROR, TOGGLE_UPDATE_NOTE, SINGLE_NOTE} from '../actions';

const initialState = {
  notes: [],
  fetchingNotes: false,
  creatingNote: false,
  deletingNote: false,
  editingNote: false,
  showUpdate: false,
  noteSelected: {},
  error: null,
}

const noteReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_NOTES:
      return {...state, fetchingNotes: true};
    case NOTES_FETCHED:
      return {...state, notes: action.payload, fetchingNotes: false};
    case CREATING_NOTE:
      return {...state, creatingNote: true};
    case NOTE_CREATED:
      return {...state, notes: action.payload, creatingNote: false};
    case DELETING_NOTE:
      return {...state, deletingNote: true};
    case NOTE_DELETED:
      return {...state, notes: action.payload, deletingNote: false};
    case EDITING_NOTE:
      return {...state, editingNote: true};
    case NOTE_EDITED:
      return {...state, notes: action.payload, editingNote: false};
    case SINGLE_NOTE:
      return {...state, noteSelected: action.payload, showUpdate: false };
    case TOGGLE_UPDATE_NOTE:
      return {...state, showUpdate: !state.showUpdate };
    case ERROR:
      return {...state, fetchingNotes: false, creatingNote: false, deletingNote: false, editingNote: false, error: action.payload};
    default:
      return state;
  }
}

export default noteReducer;