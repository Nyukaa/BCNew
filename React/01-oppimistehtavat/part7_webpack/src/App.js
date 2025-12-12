import React, { useState, useEffect } from "react";
import axios from "axios";
//custom hook to fetch notes from server
const useNotes = (url) => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setNotes(response.data);
    });
  }, [url]);
  return notes;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [values, setValues] = useState([]);

  const url = "https://notes2023.fly.dev/api/notes";
  //   const notes = useNotes(url);
  const notes = useNotes(BACKEND_URL);
  const handleClick = () => {
    setCounter(counter + 1);
    setValues(values.concat(counter));
  };

  return (
    <div className="container">
      hello webpack {counter} clicks
      <button onClick={handleClick}>press</button>
      <div>
        <div>
          {notes.length} notes on server {BACKEND_URL}
        </div>
      </div>
    </div>
  );
};

//code before dev and prod configuration
// import React, { useState } from "react";
// import "./index.css";

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const [values, setValues] = useState([]);
//   const handleClick = () => {
//     setCounter(counter + 1);
//     setValues(values.concat(counter));
//   };
//   return (
//     <div className="container">
//       hello webpack {counter} clicks
//       <button onClick={handleClick}>press</button>
//     </div>
//   );
// };

// const App = () => {
//   return <div className="container">hello webpack</div>;
// };
// const App = () =>
//   react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
//     "div",
//     null,
//     "hello webpack"
//   );

export default App;
