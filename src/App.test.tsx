import { fireEvent, render, screen } from "@testing-library/react";
import { userService } from "./Service/user.service";

import { App } from "./App";

describe("Test <App />", () => {
  beforeEach(() => {
    jest.spyOn(userService, "getAll").mockImplementation(
      () =>
        new Promise((res) =>
          res({
            data: [{ id: 0, name: "ridvan", username: "demirci" }],
          } as any)
        )
    );
  });

  it("Should render Successfully", () => {
    render(<App />);
    const element = screen.getByText("Search");
    expect(element).toBeInTheDocument();
  });

  it("should render backend Data", async () => {
    render(<App />);
    const listItemElement = await screen.findByTestId("list-item-0");
    expect(listItemElement).toBeInTheDocument();
  });

  it("should add a data from input and add button", async () => {
    render(<App />);
    const searchButton = screen.getByText("Search");
    expect(searchButton).toBeInTheDocument();
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.click(searchButton);

    const listItemElement = await screen.findByTestId("list-name-0");
    expect(listItemElement.innerHTML).toBe("test");
  });
});
