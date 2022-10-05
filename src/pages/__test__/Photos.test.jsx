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
import Photos from "../Photos";

describe("Photo Test", () => {
  test("Page Title", () => {
    render(
      <MemoryRouter>
        <Photos />
      </MemoryRouter>
    );

    expect(screen.getByText("No Result ...")).toBeInTheDocument();
  });

  describe("Search Album", () => {
    test("Album is available", async () => {
      axios.get.mockResolvedValueOnce({
        data: [
          {
            userId: 1,
            id: 1,
            title: "Image 1",
          },
          {
            userId: 1,
            id: 2,
            title: "Image 2",
          },
        ],
      });

      render(
        <MemoryRouter>
          <Photos />
        </MemoryRouter>
      );

      /* When Albums have not been fetched */
      expect(screen.getByText("No Result ...")).toBeInTheDocument();

      await waitFor(() => {
        const testAlbums = screen.getAllByTestId("phototext");
        expect(testAlbums).toHaveLength(2);
      });
    });

    test("Search for Album", async () => {
      axios.get.mockResolvedValueOnce({
        data: [
          {
            userId: 1,
            id: 1,
            title: "Image 1",
          },
          {
            userId: 1,
            id: 2,
            title: "Image 2 Sweet",
          },
        ],
      });

      render(
        <MemoryRouter>
          <Photos />
        </MemoryRouter>
      );

      /* When Albums have not been fetched */
      expect(screen.getByText("No Result ...")).toBeInTheDocument();

      //   Input Field From Screen
      const inputEl = screen.getByTestId("searchField");

      userEvent.type(inputEl, "Sweet");

      await waitFor(() => {
        const testAlbums = screen.getAllByTestId("phototext");
        expect(testAlbums).toHaveLength(1);
      });
    });

    test("No Albums ", () => {
      render(
        <MemoryRouter>
          <Photos />
        </MemoryRouter>
      );

      expect(screen.getByText("No Result ...")).toBeInTheDocument();
    });
  });
});
