import { useCounter } from "./hooks/useCounter";

import FormInput from "./components/FormInput";
const App = () => {
  const left = useCounter();
  const right = useCounter();

  return (
    <div>
      <FormInput />
      {left.value}
      <button onClick={left.increase}>left</button>

      <button onClick={right.increase}>right</button>
      {right.value}
    </div>
  );
};
export default App;
