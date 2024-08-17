import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FormCreate from "../app/components/form";
import userEvent from "@testing-library/user-event";

describe("Page", () => {
  it("renders a heading", async () => {
    render(<FormCreate />);

    await userEvent.click(screen.getByText("Добавить"));
  });
});
