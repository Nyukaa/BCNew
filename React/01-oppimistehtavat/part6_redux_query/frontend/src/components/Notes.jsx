import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer";
import Note from "./Note.jsx";
import noteService from "../services/notes";

const Notes = () => {
  const dispatch = useDispatch(); //даёт доступ к функции dispatch() из Redux store
  //const notes = useSelector((state) => state.notes); //позволяет «достать» данные из Redux-хранилища все заметки
  //but devTools Возвращаешь “весь state” → React-Redux считает это ошибкой.
  // Можно фильтровать данные, например — получить только важные заметки:

  //   const notes = useSelector((state) => {
  //     if (state.filter === "ALL") {
  //       return state.notes;
  //     }
  //     return state.filter === "IMPORTANT"
  //       ? state.notes.filter((note) => note.important)
  //       : state.notes.filter((note) => !note.important);
  //   });

  //=== simplify the selector by destructuring
  const notes = useSelector(({ filter, notes }) => {
    if (filter === "ALL") return notes;
    return filter === "IMPORTANT"
      ? notes.filter((n) => n.important)
      : notes.filter((n) => !n.important);
  });

  const handleToggleImportance = async (note) => {
    const updated = {
      ...note,
      important: !note.important,
    };
    //
    const returnedNote = await noteService.updateImportance(note.id, updated);
    dispatch(toggleImportanceOf(returnedNote.id));
  };
  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => handleToggleImportance(note)}
        />
      ))}
    </ul>
  );
};
export default Notes;
