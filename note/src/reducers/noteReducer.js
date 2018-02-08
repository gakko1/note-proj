import {FETCHING_NOTES, NOTES_FETCHED, CREATING_NOTE, NOTE_CREATED, DELETING_NOTE, NOTE_DELETED, EDITING_NOTE, NOTE_EDITED, ERROR} from '../actions';

const initialState = {
  notes: [],
  fetchingNotes: false,
  notesFetched: false,
  creatingNote: false,
  noteCreated: false,
  deletingNote: false,
  noteDeleted: false,
  editingNote: false,
  noteEdited: false,
  error: null,
}

const noteReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_NOTES:
      return {...state, fetchingNotes: true};
    case NOTES_FETCHED:
      return {...state, notes: action.payload, fetchingNotes: false, notesFetched: true,};
    case CREATING_NOTE:
      return {...state, creatingNote: true};
    case NOTE_CREATED:
      return {...state, notes: action.payload, noteCreated: true, creatingNote: false};
    case DELETING_NOTE:
      return {...state, deletingNote: true};
    case NOTE_DELETED:
      return {...state, notes: action.payload, noteDeleted: true, deletingNote: false};
    case EDITING_NOTE:
      return {...state, editingNote: true};
    case NOTE_EDITED:
      return {...state, notes: action.payload, noteEdited: true, editingNote: false};
    case ERROR:
      return {...state, fetchingNotes: false, creatingNote: false, deletingNote: false, editingNote: false, error: action.payload};
    default:
      return state;
  }
}

export default noteReducer;