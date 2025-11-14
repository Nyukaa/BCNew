import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer";
import Note from "./Note.jsx";

const Notes = () => {
  const dispatch = useDispatch(); //даёт доступ к функции dispatch() из Redux store
  const notes = useSelector((state) => state); //позволяет «достать» данные из Redux-хранилища все заметки
  //but devTools Возвращаешь “весь state” → React-Redux считает это ошибкой.

  // Можно фильтровать данные, например — получить только важные заметки:
  // const importantNotes = useSelector(state => state.filter(note => note.important) )
  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => dispatch(toggleImportanceOf(note.id))}
        />
      ))}
    </ul>
  );
};
export default Notes;
