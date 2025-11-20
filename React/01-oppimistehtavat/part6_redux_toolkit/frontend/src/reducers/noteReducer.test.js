import deepFreeze from "deep-freeze";
import { describe, expect, test } from "vitest";
import noteReducer from "./noteReducer";

describe("noteReducer", () => {
  // test("returns new state with action NEW_NOTE", () => {
  test("returns new state with action notes/createNote", () => {
    const state = [];
    const action = {
      // type: "NEW_NOTE",
      // payload: {
      //   content: "the app state is in redux store",
      //   important: true,
      //   id: 1,
      // },
      type: "notes/createNote",
      payload: "the app state is in redux store",
    };

    deepFreeze(state); // замораживает объект, чтобы запретить мутации

    //     ❌ Если редьюсер попытается сделать state.push(...), тест упадёт,
    // потому что deepFreeze запретил изменять исходный массив.

    // ✅ А если редьюсер создаёт новый массив (state.concat(...)), тест проходит успешно.
    const newState = noteReducer(state, action);

    expect(newState).toHaveLength(1);
    expect(newState.map((note) => note.content)).toContainEqual(action.payload);
    // })
    //   expect(newState).toContainEqual(action.payload);
  });
  // test("returns new state with action TOGGLE_IMPORTANCE", () => {
  test("returns new state with action notes/toggleImportanceOf", () => {
    const state = [
      {
        content: "the app state is in redux store",
        important: true,
        id: 1,
      },
      {
        content: "state changes are made with actions",
        important: false,
        id: 2,
      },
    ];

    const action = {
      //   type: "TOGGLE_IMPORTANCE",
      //   payload: {
      //     id: 2,
      //   },
      type: "notes/toggleImportanceOf",
      payload: 2,
    };

    deepFreeze(state);
    const newState = noteReducer(state, action);

    expect(newState).toHaveLength(2);

    // первая заметка не изменилась
    expect(newState).toContainEqual(state[0]);

    // у второй изменилась важность (important: false → true)
    expect(newState).toContainEqual({
      content: "state changes are made with actions",
      important: true,
      id: 2,
    });
  });
});
