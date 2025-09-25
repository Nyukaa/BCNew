import Note from "./components/Note";

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};
export default App;
// const App = ({ notes }) => {
//   const result = notes.map((note) => note.id);
//   const result2 = notes.map((note) => note.important);
//   console.log(result);
//   console.log(result2);
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map((note) => (
//           <li key={note.id}>{note.content}</li>
//         ))}
//         {/* <li>{notes[0].content}</li>
//         <li>{notes[1].content}</li>
//         <li>{notes[2].content}</li> */}
//       </ul>
//     </div>
//   );
// };

// export default App;
