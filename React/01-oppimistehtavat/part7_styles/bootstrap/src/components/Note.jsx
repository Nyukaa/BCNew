// import { useParams } from "react-router-dom";
const Note = ({ note }) => {
  if (!note) {
    return <div>Note not found</div>;
  }

  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note.user}</div>
      <div>
        <strong>{note.important ? "important" : ""}</strong>
      </div>
    </div>
  );
};

// const Note = ({ note, toggleImportance }) => {
//   const label = note.important ? "make not important" : "make important";

//   return (
//     <li className="note">
//       {note.content}
//       <button onClick={toggleImportance}>{label}</button>
//     </li>
//   );
// };

export default Note;
