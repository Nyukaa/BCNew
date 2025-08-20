import { useState } from "react";
//function that returnes the function
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;
const App = () => {
  const [valueNew, setValueNew] = useState(10);
  const [value, setValue] = useState(10);

  const hello = (who) => {
    const handler = () => {
      console.log("hello", who);
    };
    return handler;
  };

  const setToValue = (newValue) => () => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <div>
      {valueNew}
      {/* <button onClick={console.log("clicked the button")}>
        reset to zero
      </button>
      value from the function console.log is undefined */}
      <button onClick={() => console.log("clicked the button")}>button</button>
      <button onClick={() => setValueNew(0)}> reset to zero</button>
      <div>
        <button onClick={hello("world")}>button world</button>
        <button onClick={hello("react")}>button react</button>
        <button onClick={hello("function")}>button function</button>
      </div>
      <div>
        {value}
        <Button onClick={setToValue(1000)} text="thousand" />
        <Button onClick={setToValue(0)} text="reset" />
        <Button onClick={setToValue(value + 1)} text="increment" />
      </div>
    </div>
  );
};
export default App;
