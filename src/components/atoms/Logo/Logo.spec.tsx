import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo", () => {
  it("should render correctly", () => {
    render(<Logo />);
    expect(screen.getByTestId("img-logo")).toBeInTheDocument();
  });
});
