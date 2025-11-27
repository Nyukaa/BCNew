// import { combineReducers } from "redux";
import { current } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import noteService from "../services/notes";

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    createNote(state, action) {
      //const content = action.payload;
      //Теперь action.payload содержит весь объект заметки,
      state.push(action.payload);
      // content,
      // important: false,
      // id: generateId(),
      // });
    },

    toggleImportanceOf(state, action) {
      const id = action.payload;
      const noteToChange = state.find((n) => n.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      //console.log(state); //not usful
      console.log(current(state)); // useful for debugging immutable state
      return state.map((note) => (note.id !== id ? note : changedNote));
    },
    setNotes(state, action) {
      return action.payload;
    },
  },
});
//export actions for use in components
const { createNote, setNotes } = noteSlice.actions;
//thunk action creators
export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll();
    dispatch(setNotes(notes));
  };
};
//thunk action creator for adding a new note
export const appendNote = (content) => {
  return async (dispatch) => {
    const newNote = await noteService.createNew(content);
    dispatch(createNote(newNote));
  };
};

export const { toggleImportanceOf } = noteSlice.actions;

//export const { createNote, toggleImportanceOf, setNotes } = noteSlice.actions;
export default noteSlice.reducer;
