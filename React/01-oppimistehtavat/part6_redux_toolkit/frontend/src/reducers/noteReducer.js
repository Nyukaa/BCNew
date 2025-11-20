// import { combineReducers } from "redux";
import { current } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

const initialState = [
  {
    content: "reducer defines how redux store works",
    important: true,
    id: 1,
  },
  {
    content: "state of store can contain any data",
    important: false,
    id: 2,
  },
];

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote(state, action) {
      const content = action.payload;
      state.push({
        content,
        important: false,
        id: generateId(),
      });
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
  },
});

export const { createNote, toggleImportanceOf } = noteSlice.actions;
export default noteSlice.reducer;

// const noteReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "NEW_NOTE":
//       return [...state, action.payload]; // добавляем новую заметку
//     case "TOGGLE_IMPORTANCE": {
//       const id = action.payload.id;
//       const noteToChange = state.find((n) => n.id === id);
//       // создаём изменённую версию (immutability!)
//       const changedNote = {
//         ...noteToChange,
//         important: !noteToChange.important,
//       };
//       // возвращаем новый массив заметок
//       return state.map((note) => (note.id !== id ? note : changedNote));
//     }
//     default:
//       return state;
//   }
// };

//

// export const createNote = (content) => {
//   return {
//     type: "NEW_NOTE",
//     payload: {
//       content,
//       important: false,
//       id: generateId(),
//     },
//   };
// };

// export const toggleImportanceOf = (id) => {
//   return {
//     type: "TOGGLE_IMPORTANCE",
//     payload: { id },
//   };
// };

// export default noteReducer;
