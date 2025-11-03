import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Note from "./Note";

test("renders content", () => {
  const note = {
    content: "Component testing is done with react-testing-library",
    important: true,
  };

  render(<Note note={note} />);
  //выведет в консоль текущий HTML-документ
  //screen.debug();

  const element = screen.getByText(
    "Component testing is done with react-testing-library"
  );

  //выведет в консоль конкретный элемент
  //screen.debug(element);
  expect(element).toBeDefined();
});

// Alternative ways to query elements:
// const element = await screen.findByText("Does not work anymore :(');
// const element = screen.getByText("Does not work anymore :(", { exact: false });
test("clicking the button calls event handler once", async () => {
  const note = {
    content: "Component testing is done with react-testing-library",
    important: true,
  };
  //заглушка» от Vitest, которая заменяет реальную функцию
  const mockHandler = vi.fn();

  render(<Note note={note} toggleImportance={mockHandler} />);
  //Создаётся "виртуальный пользователь":
  const user = userEvent.setup();
  const button = screen.getByText("make not important");
  //симулирует нажатие
  await user.click(button);
  //Проверяем, что обработчик был вызван 1 раз
  expect(mockHandler.mock.calls).toHaveLength(1);
});
test("renders content", () => {
  const note = {
    content: "Does not work anymore :(",
    important: true,
  };

  render(<Note note={note} />);

  const element = screen.getByText("Does not work anymore :(");

  expect(element).toBeDefined();
});
