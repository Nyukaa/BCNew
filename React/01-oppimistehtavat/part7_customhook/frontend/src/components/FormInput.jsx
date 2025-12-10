import { useField } from "../hooks/useField";
const FormInput = () => {
  const name = useField("text");
  const born = useField("date");
  const height = useField("number");

  return (
    <form>
      <input {...name} />
      {/* 
        same as
      <input type={name.type} value={name.value} onChange={name.onChange} /> */}
      <input {...born} />
      <input {...height} />
    </form>
  );
};
export default FormInput;

// const App = () => {
//   const [name, setName] = useState("");
//   const [born, setBorn] = useState("");
//   const [height, setHeight] = useState("");

//   return (
//     <div>
//       <form>
//         name:
//         <input
//           type="text"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//         />
//         <br />
//         birthdate:
//         <input
//           type="date"
//           value={born}
//           onChange={(event) => setBorn(event.target.value)}
//         />
//         <br />
//         height:
//         <input
//           type="number"
//           value={height}
//           onChange={(event) => setHeight(event.target.value)}
//         />
//       </form>
//       <div>
//         {name} {born} {height}
//       </div>
//     </div>
//   );
// };
