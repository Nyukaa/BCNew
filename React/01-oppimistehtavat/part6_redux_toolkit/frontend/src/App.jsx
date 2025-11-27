import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
import VisibilityFilter from "./components/VisibilityFilter";
//for fetching notes from backend
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//import { setNotes } from "./reducers/noteReducer";
//import noteService from "./services/notes";
import { initializeNotes } from "./reducers/noteReducer";

const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   noteService.getAll().then((notes) => dispatch(setNotes(notes)));
  // }, [dispatch]);
  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

  return (
    <div>
      <NoteForm />

      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;

// import store from "./main.jsx";
// import { createNote, toggleImportanceOf } from "./actions/noteActions";

// const App = () => {
//   const addNote = (event) => {
//     event.preventDefault();
//     const content = event.target.note.value;
//     event.target.note.value = "";
//     console.log("🧮 store before dispatch:", store.getState());

//     store.dispatch(createNote(content));

//     console.log("🧮 store after dispatch:", store.getState());
//   };

//   const toggleImportance = (id) => {
//     store.dispatch(toggleImportanceOf(id));
//   };

//   return (
//     <div>
//       <form onSubmit={addNote}>
//         <input name="note" />
//         <button type="submit">add</button>
//       </form>
//       <ul>
//         {store.getState().map((note) => (
//           <li key={note.id} onClick={() => toggleImportance(note.id)}>
//             {note.content}{" "}
//             <strong>{note.important ? "important" : "not important"}</strong>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default App;
