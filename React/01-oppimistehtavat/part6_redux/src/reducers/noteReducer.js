import { combineReducers } from "redux";
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

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_NOTE":
      return [...state, action.payload]; // добавляем новую заметку
    case "TOGGLE_IMPORTANCE": {
      const id = action.payload.id;
      const noteToChange = state.find((n) => n.id === id);
      // создаём изменённую версию (immutability!)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      // возвращаем новый массив заметок
      return state.map((note) => (note.id !== id ? note : changedNote));
    }
    default:
      return state;
  }
};

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

export const createNote = (content) => {
  return {
    type: "NEW_NOTE",
    payload: {
      content,
      important: false,
      id: generateId(),
    },
  };
};

export const toggleImportanceOf = (id) => {
  return {
    type: "TOGGLE_IMPORTANCE",
    payload: { id },
  };
};

export default noteReducer;

// const noteReducer = (state = initialState, action) => {
//   //console.log("state before action", state, "🧮 which action", action);

//   switch (action.type) {
//     case "NEW_NOTE":
//       return [...state, action.payload];
//     case "TOGGLE_IMPORTANCE":
//       const id = action.payload.id;
//       return state.map((note) =>
//         note.id !== id ? note : { ...note, important: !note.important }
//       );
//     default:
//       return state;
//   }
// };
// export default noteReducer;
