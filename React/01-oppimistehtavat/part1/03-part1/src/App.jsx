import { useState } from "react";
const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);
  const increaseByOne = () => {
    setCounter(counter + 1);
    console.log("increasing, value before", counter);
  };
  const decreaseByOne = () => {
    setCounter(counter - 1);
    console.log("decreasing, value before", counter);
  };
  const setToZero = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };
  return (
    <div>
      <Display counter={counter} />
      {/* <div>{counter}</div> */}
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
      {/* <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>zero</button> */}
    </div>
  );
  // const handleClick = () => {
  //   console.log("clicked");
  // };

  // return (
  //   <div>
  //     <div>{counter}</div>
  //     <button onClick={() => setCounter(counter + 1)}>plus</button>
  //     <button onClick={() => setCounter(0)}>zero</button>
  //   </div>
  // );
};

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   setTimeout(() => setCounter(counter + 1), 1000);
//   console.log("rendering...", counter);
//   return <div>{counter}</div>;
// };

export default App;
