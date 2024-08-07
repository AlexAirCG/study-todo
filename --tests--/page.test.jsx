import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../app/components/header";
import userEvent from "@testing-library/user-event";

describe("Page", () => {
  it("renders a heading", async () => {
    render(<Header />);

    await userEvent.click(screen.getByText("Добавить"));
  });
});
