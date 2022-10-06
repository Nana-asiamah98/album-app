import { render, screen } from "@testing-library/react";
import Italicizer from "../Italicizer";

describe("Italicize Words", () => {
  test("Italicize Searched Word", () => {
    const title = "This is a nice album";
    const searchedWord = "album";

    const { getByTestId } = render(
      <Italicizer search={searchedWord} word={title} />
    );

    const spanEl = getByTestId("italicizedWordTest");
    expect(spanEl.classList.contains("font-semibold")).toBe(true);
  });

  test("No Italicize Searched Word", () => {
    const title = "This is a nice album";
    const searchedWord = "sweet";

    render(<Italicizer search={searchedWord} word={title} />);

    expect(screen.queryByText("font-semibold")).toBeNull();
  });
});
