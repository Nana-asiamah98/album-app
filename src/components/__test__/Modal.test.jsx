import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Modal from "../Modal";

describe("Modal", () => {
  test("Display Title", () => {
    const imageData = {
      albumId: 2,
      id: 56,
      title: "vel voluptatem esse consequuntur est officia quo aut quisquam",
      url: "https://via.placeholder.com/600/f9f067",
      thumbnailUrl: "https://via.placeholder.com/150/f9f067",
    };
    render(<Modal image={imageData} />);

    expect(
      screen.getByText(
        "Title : vel voluptatem esse consequuntur est officia quo aut quisquam"
      )
    ).toBeInTheDocument();
  });
  test("Display Image", () => {
    const imageData = {
      albumId: 2,
      id: 56,
      title: "vel voluptatem esse consequuntur est officia quo aut quisquam",
      url: "https://via.placeholder.com/600/f9f067",
      thumbnailUrl: "https://via.placeholder.com/150/f9f067",
    };
    const { getByAltText } = render(<Modal image={imageData} />);

    const image = getByAltText(
      "vel voluptatem esse consequuntur est officia quo aut quisquam"
    );

    expect(image.src).toContain("https://via.placeholder.com/600/f9f067");
  });
});
