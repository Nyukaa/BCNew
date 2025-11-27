import { useDispatch } from "react-redux";
//import { createNote } from "../reducers/noteReducer";
//import noteService from "../services/notes"; was without redux thunk
import { appendNote } from "../reducers/noteReducer";

const NoteForm = () => {
  const dispatch = useDispatch();

  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    // const newNote = await noteService.createNew(content); //for seerver side
    // dispatch(createNote(newNote));
    dispatch(appendNote(content));
  };

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  );
};
export default NoteForm;
