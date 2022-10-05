import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import Gallery from "../Gallery";

describe("Gallery Test", () => {
  it("Page Title As My Gallery", () => {
    render(
      <MemoryRouter>
        <Gallery />
      </MemoryRouter>
    );

    expect(screen.getByText("My Gallery")).toBeInTheDocument("My Gallery");
  });

  describe("Search Album", () => {
    it("Album is available", () => {
      render(
        <MemoryRouter>
          <Gallery />
        </MemoryRouter>
      );

      expect(screen.getByText("quidem ")).toBeInTheDocument();
    });

    it("No Albums rendered", () => {
      render(
        <MemoryRouter>
          <Gallery />
        </MemoryRouter>
      );

      expect(screen.getByText("No Result ...")).toBeInTheDocument();
    });
  });
});
