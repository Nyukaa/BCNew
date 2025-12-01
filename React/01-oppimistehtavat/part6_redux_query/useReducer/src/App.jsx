//import { useReducer } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
//import CounterContext from "./CounterContext";

const App = () => {
  //const [counter, counterDispatch] = useReducer(counterReducer, 0);
  //how to use useReducer
  //const [state, dispatch] = useReducer(reducer, initialState);
  //  //App.jsx больше не заботится о состоянии, оно полностью вынесено в контекст (CounterContext):
  return (
    <div>
      <Display />
      <div>
        <Button type="INC" label="+" />
        <Button type="DEC" label="-" />
        <Button type="ZERO" label="0" />
      </div>
    </div>
  );
};

{
  /* prop drilling старый вариант
    <div>
      <Display counter={counter} />
      <Button dispatch={counterDispatch} type="INC" label="+" />
      <Button dispatch={counterDispatch} type="DEC" label="-" />
      <Button dispatch={counterDispatch} type="ZERO" label="0" />
    </div>
    */
}

export default App;
