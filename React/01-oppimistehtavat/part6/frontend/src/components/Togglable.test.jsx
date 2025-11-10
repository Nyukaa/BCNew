import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Togglable from "./Togglable";

describe("<Togglable />", () => {
  //выполняется перед каждым тестом, рендерим компонент <Togglable />
  beforeEach(() => {
    render(
      <Togglable buttonLabel="show...">
        <div>togglable content</div>
      </Togglable>
    );
  });
  //Проверка, что компонент рендерится
  test("renders its children", () => {
    screen.getByText("togglable content");
  });
  //Проверка, что содержимое изначально скрыто
  test("at start the children are not displayed", () => {
    const element = screen.getByText("togglable content");
    expect(element).not.toBeVisible();
  });

  test("after clicking the button, children are displayed", async () => {
    const user = userEvent.setup();
    const button = screen.getByText("show...");
    await user.click(button);

    const element = screen.getByText("togglable content");
    expect(element).toBeVisible();
  });
  //роверка, что контент снова можно скрыть
  test("toggled content can be closed", async () => {
    const user = userEvent.setup();
    const button = screen.getByText("show...");
    await user.click(button);

    const closeButton = screen.getByText("cancel");
    await user.click(closeButton);

    const element = screen.getByText("togglable content");
    expect(element).not.toBeVisible();
  });
});
