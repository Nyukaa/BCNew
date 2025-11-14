//dispatch() отправляет action в редьюсер
//getState()  возвращает текущее состояние
//subscribe()  подписывается на изменения состоянияimport ReactDOM from "react-dom/client";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import noteReducer from "./reducers/noteReducer";

const store = createStore(noteReducer);
//Provider — это компонент из react-redux.
//Он оборачивает всё приложение.
//Ему передаётся store в качестве пропса.
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

//previous code
// import ReactDOM from "react-dom/client";
// import { createStore } from "redux";
// import noteReducer from "./reducers/noteReducer";
// import App from "./App.jsx";
// import { Provider } from "react-redux";
// const store = createStore(noteReducer);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const renderApp = () => {
//   root.render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// };

// renderApp();
// store.subscribe(renderApp);
// console.log("🧮 Store changed:", store.getState());
// export default store;
// it was now in reduser Начальное состояние
// store.dispatch({
//   type: "NEW_NOTE",
//   payload: {
//     content: "the app state is in redux store",
//     important: true,
//     id: 1,
//   },
// });

// store.dispatch({
//   type: "NEW_NOTE",
//   payload: {
//     content: "state changes are made with actions",
//     important: false,
//     id: 2,
//   },
// });
// store.dispatch({
//   type: "TOGGLE_IMPORTANCE",
//   payload: {
//     id: 2,
//   },
// });

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { configureStore, createSlice } from "@reduxjs/toolkit";

// // --- 1️⃣ Создаём slice (редьюсер + экшены в одном месте)
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: 0,
//   reducers: {
//     increment: (state) => state + 1,
//     decrement: (state) => state - 1,
//     zero: () => 0,
//   },
// });

// // --- 2️⃣ Достаём actions
// const { increment, decrement, zero } = counterSlice.actions;

// // --- 3️⃣ Создаём store через configureStore
// const store = configureStore({
//   reducer: counterSlice.reducer,
// });

// // --- 4️⃣ Подписываемся на изменения (subscribe)
// store.subscribe(() => {
//   console.log("🧮 Store changed:", store.getState());
// });

// // --- 5️⃣ Компонент
// const App = () => {
//   const state = store.getState();

//   return (
//     <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
//       <h2>Counter App (Redux Toolkit)</h2>
//       <h1>{state}</h1>

//       <button onClick={() => store.dispatch(increment())}>Plus</button>
//       <button onClick={() => store.dispatch(decrement())}>Minus</button>
//       <button onClick={() => store.dispatch(zero())}>Zero</button>
//     </div>
//   );
// };

// // --- 6️⃣ Рендер и подписка на перерисовку
// const root = ReactDOM.createRoot(document.getElementById("root"));

// const renderApp = () => root.render(<App />);
// renderApp();
// store.subscribe(renderApp);

// import ReactDOM from "react-dom/client";
// import { createStore } from "redux";

// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     case "ZERO":
//       return 0;
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

// const App = () => {
//   return (
//     <div>
//       <div>{store.getState()}</div>
//       {/* { type: "INCREMENT" }  action*/}
//       <button onClick={() => store.dispatch({ type: "INCREMENT" })}>
//         plus
//       </button>
//       <button onClick={() => store.dispatch({ type: "DECREMENT" })}>
//         minus
//       </button>
//       <button onClick={() => store.dispatch({ type: "ZERO" })}>zero</button>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const renderApp = () => {
//   root.render(<App />);
// };

// renderApp();
// store.subscribe(renderApp);
