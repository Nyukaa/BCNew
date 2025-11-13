const noteReducer = (state = [], action) => {
  //console.log("state before action", state, "🧮 which action", action);
  switch (action.type) {
    // case "NEW_NOTE":
    //   state.push(action.payload);
    //   return state;
    case "NEW_NOTE":
      return [...state, action.payload];
    case "TOGGLE_IMPORTANCE":
      const id = action.payload.id;
      return state.map((note) =>
        note.id !== id ? note : { ...note, important: !note.important }
      );
    default:
      return state;
  }
};
export default noteReducer;
