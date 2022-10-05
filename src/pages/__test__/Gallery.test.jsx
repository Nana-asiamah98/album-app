import {
  render,
  screen,
  waitFor,
  waitForElement,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import Gallery from "../Gallery";

describe("Gallery Test", () => {
  test("Page Title As My Gallery", () => {
    render(
      <MemoryRouter>
        <Gallery />
      </MemoryRouter>
    );

    expect(screen.getByText("My Gallery")).toBeInTheDocument("My Gallery");
  });

  describe("Search Album", () => {
    test("Album is available", async () => {
      axios.get.mockResolvedValueOnce({
        data: [
          {
            userId: 1,
            id: 1,
            title: "Album1",
          },
          {
            userId: 1,
            id: 2,
            title: "Album2",
          },
        ],
      });

      render(
        <MemoryRouter>
          <Gallery />
        </MemoryRouter>
      );

      /* When Albums have not been fetched */
      expect(screen.getByText("No Result ...")).toBeInTheDocument();

      await waitFor(() => {
        const testAlbums = screen.getAllByTestId("albumText");
        expect(testAlbums).toHaveLength(2);
      });
    });
    test("Search for Album", async () => {
      axios.get.mockResolvedValueOnce({
        data: [
          {
            userId: 1,
            id: 1,
            title: "Album 1 Sweet",
          },
          {
            userId: 1,
            id: 2,
            title: "Album2",
          },
        ],
      });

      render(
        <MemoryRouter>
          <Gallery />
        </MemoryRouter>
      );

      /* When Albums have not been fetched */
      expect(screen.getByText("No Result ...")).toBeInTheDocument();

      //   Input Field From Screen
      const inputEl = screen.getByTestId("searchField");

      userEvent.type(inputEl, "Sweet");

      await waitFor(() => {
        const testAlbums = screen.getAllByTestId("albumText");
        expect(testAlbums).toHaveLength(1);
      });
    });

    test("No Albums rendered", () => {
      render(
        <MemoryRouter>
          <Gallery />
        </MemoryRouter>
      );

      expect(screen.getByText("No Result ...")).toBeInTheDocument();
    });
  });
});
