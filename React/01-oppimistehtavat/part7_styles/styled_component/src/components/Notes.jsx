import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
const Notes = ({ notes }) => (
  <div>
    <h2>Notes</h2>
    {/* Using Bootstrap Table component for styling */}
    <Table striped>
      <tbody>
        {notes.map((note) => (
          <tr key={note.id}>
            <td>
              <Link to={`/notes/${note.id}`}>{note.content}</Link>
            </td>
            <td>{note.user}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);
// const Notes = ({ notes }) => (
//   <div>
//     <h2>Notes</h2>
//     <ul>
//       {notes.map((note) => (
//         <li key={note.id}>
//           <Link to={`/notes/${note.id}`}>{note.content}</Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// );
export default Notes;
