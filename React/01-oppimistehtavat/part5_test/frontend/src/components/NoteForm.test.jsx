import { render, screen } from "@testing-library/react";
import NoteForm from "./NoteForm";
import userEvent from "@testing-library/user-event";

test("<NoteForm /> updates parent state and calls onSubmit", async () => {
  const createNote = vi.fn(); // создаём mock-функцию
  const user = userEvent.setup();

  render(<NoteForm createNote={createNote} />);
  const input = screen.getByLabelText("content"); //находит <input /> according to label
  // const input = screen.getByRole("textbox"); //находит <input /> dont use it you have 2 inputs
  // const input = screen.getByPlaceholderText('write note content here')
  //const input = container.querySelector("#note-input"); //находит <input /> by id from css
  const sendButton = screen.getByText("save"); //находит кнопку «save»

  await user.type(input, "testing a form..."); // имитирует ввод текста в поле.
  await user.click(sendButton); //имитирует нажатие на кнопку

  expect(createNote.mock.calls).toHaveLength(1); // Проверяем, что createNote вызвалась один раз.
  expect(createNote.mock.calls[0][0].content).toBe("testing a form..."); // Проверяем, что она получила объект с нужным содержимым (content: 'testing a form...')
  console.log(createNote.mock.calls);
});
