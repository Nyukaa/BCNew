import { createContext, useReducer } from "react";

// По сути, это мини-Redux, встроенный в React:
// useReducer = reducer + dispatch
// CounterContext = глобальное хранилище
// CounterContextProvider = аналог Redux Provider

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "ZERO":
      return 0;
    default:
      return state;
  }
};
const CounterContext = createContext();

export const CounterContextProvider = (props) => {
  const [counter, counterDispatch] = useReducer(counterReducer, 0);

  return (
    <CounterContext.Provider value={{ counter, counterDispatch }}>
      {props.children} {/* всё что внутри провайдера */}
    </CounterContext.Provider>
  );
};

export default CounterContext;
