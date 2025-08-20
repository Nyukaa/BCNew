import { useState } from "react";

const History = (props) => {
  console.log("props value is", props);
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  // debugger;
  return <div>button press history: {props.allClicks.join(" ")}</div>;

  // the same in ternal
  // <div>
  //   {allClicks.length === 0
  //     ? "the app is used by pressing the buttons"
  //     : `button press history: ${allClicks.join(" ")}`}
  // </div>;
};
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);

    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    console.log("right");
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(updatedRight + left);
  };

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="right" />
      {/* <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button> */}
      {right}
      <History allClicks={allClicks} />
      {/* <p>{allClicks.join(" ")}</p> */}
      <p>total {total}</p>
    </div>
  );
};
export default App;
